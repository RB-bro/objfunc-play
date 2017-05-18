import React, { Component } from 'react'

//this file is a work in progress

const counter = (state = { value: 0 }, action) => ::
  const identity = item => item
  const cases = 
    @{} INCREMENT: identity @ { value: state.value + 1 }
      , DECREMENT: identity @ { value: state.value - 1 }
      , default: identity @ state

  const hasAction = actionType => ::
    let caseOptions = Object.keys(cases)
    return -1 == caseOptions.indexOf(actionType) ? false : true

  return hasAction(action.type) ? cases[action.type]() : cases.default()

class Counter extends Component {
    state = counter(undefined, {})

    dispatch(action) ::
      this.setState(prevState => counter(prevState, action))

    increment = () => ::
      this.dispatch({ type: 'INCREMENT' })

    decrement = () => ::
      this.dispatch({ type: 'DECREMENT' })

    render() ::
      return @ <div> {this.state.value} <button onClick={this.increment}>+</button> <button onClick={this.decrement}>-</button> </div>
