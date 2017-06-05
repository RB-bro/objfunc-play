import React from 'react'

import {div, h1, button, input} from 'react-hyperscript-helpers'

export class Header extends React.Component ::
  constructor(props) ::
    super(props)

  render() ::
    return div @ {className:"row text-center"}, 
      @[] h1 @ "RECIPES"

