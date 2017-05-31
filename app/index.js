import React from 'react'
import ReactDOM from 'react-dom'

import {Header, Footer, InputRecipe} from './components'
import {RecipeStore} from './model/recipes.js'
import {div, h} from 'react-hyperscript-helpers'

// CSS IMPORTS

import styles from './styles/main.styl'
import skeleton from './styles/skeleton.css'
import normalize from './styles/normalize.css'


const row = (children) =>
  typeof children == 'string' 
    ?  div @ {className:"row"}, [children]
    :  div @ {className:"row"}, children

class Application extends React.Component ::
  constructor (props) ::
    super(props)
  render() ::
    return div @ {className:"container"}, @[]
        row @ @[] h @ Header
      , row @ @[] h @ InputRecipe, {store:new RecipeStore()}
      , row @ @[] h @ Footer



ReactDOM.render @ <Application />, document.getElementById @ "app"
