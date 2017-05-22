import React, {Component} from 'react'
import {div, p} from 'react-hyperscript-helpers'


// Just a start

class Recipe ::

    constructor() ::
        self.ingredients = []
        self.steps = []
        self.nutritionFacts = null


export class ViewRecipe extends Component ::
    constructor(props) ::
        super(props)
    render() ::
        return div @ {className:"row"}, @[]
          div @ {className:"twelve columns u-max-width text-center"}, @[]
            p @ "RECIPE"
             


class Steps ::
    constructor() ::
        self.ingredients = []

class NutritionFacts ::
    constructor() ::
        self.ingredients = []

