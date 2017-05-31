

import React from 'react'
import {div, h4} from 'react-hyperscript-helpers'

export class Footer extends React.Component ::
  constructor (props) ::
    super(props)
  render() ::
    return div @ {className:"row text-center"}, [h4("pwnage ltd.")] 
