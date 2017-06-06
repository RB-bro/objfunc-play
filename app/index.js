import React from 'react'
import ReactDOM from 'react-dom'

import {Header, Footer, InputRecipe, ViewRecipes} from './components'
import {RecipeStore} from './model/recipes.js'
import {AppStore} from './model/appstore.js'
import {div, h, input} from 'react-hyperscript-helpers'

// CSS IMPORTS

import styles from './styles/main.styl'
import skeleton from './styles/skeleton.css'
import normalize from './styles/normalize.css'

const recipeStore = new RecipeStore().init()
const appStore = new AppStore().init()

const row = (children) =>
  typeof children == 'string' 
    ?  div @ {className:"row"}, [children]
    :  div @ {className:"row"}, children

class Application extends React.Component ::
  constructor (props) ::
    super(props)
    this.state = {place:'home', store:appStore}

  componentWillMount() ::
    appStore.subscribe @ viewUpdate => ::
      this.setState @: store:viewUpdate
      this.appStoreLog = [].concat @ this.appStoreLog || [], [viewUpdate]

    window.timetravel = storeView => ::
      if undefined === storeView ::
        return this.appStoreLog
      if 'number' === typeof storeView ::
        let idx = storeView
        storeView = this.appStoreLog[idx]
        this.appStoreLog = this.appStoreLog.slice(0, idx)

      return storeView.restoreToState @ storeView


  inputRecipe () ::
    return row @ @[] h @ InputRecipe, {store:recipeStore}

  showRecipes () ::
    return row @ @[] h @ ViewRecipes, {store:recipeStore}
    
  navButtons() ::
    return @[] 
        input @: type:"button"
              , className: "button-secondary"
              , value:"home"
              , onClick:() => this.state.store.move("home")

        , input @: type:"button"
              , className: "button-secondary"
              , value:"add"
              , onClick:() => this.state.store.move("add")

  render() ::
    const header = row @ @[] h @ Header
    const footer = row @ @[] h @ Footer
    const body = this.state.store.location == "home" ? this.showRecipes() : this.inputRecipe()
    
    return div @ {className:"container"}, @[]
        header
      , row @ this.navButtons() 
      , body
      , footer



ReactDOM.render @ h(Application), document.getElementById @ "app"
