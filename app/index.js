import React from 'react'
import ReactDOM from 'react-dom'

import {Header, Footer, Form, DocumentsFieldSet, Ingredients} from './components'

// CSS IMPORTS

import styles from './styles/main.styl'
import skeleton from './styles/skeleton.css'
import normalize from './styles/normalize.css'



class Application extends React.Component ::
  constructor (props) ::
    super(props)
  render() ::
    let sayHello = () => alert @ "Hello"
    return @ 
        <div className="container">
          <div className="row">
            <Header input="New app!"/>
          </div>
          <div className="row">
            <Ingredients />
          </div>


          {/*
          <div className="row">
            <Form />
          </div>
            <DocumentsFieldSet />
          <div className="row">
            <Footer />
          </div>


          */}
          {/* Comments!!!! */}
        </div>



ReactDOM.render @ <Application />, document.getElementById @ "app"
