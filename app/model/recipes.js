global.Observable = require("zen-observable")
const {ObjectFunctional} = require("object-functional")
const initialState = require("./recipe.json")

export class RecipeStore extends ObjectFunctional ::
  asAction = this.init
  init() ::
    this._recipes = []
    for let recipe of initialState.recipes ::
      this._recipes.push @ recipe
    return this

  asAction = this.getRecipes
  getRecipes() ::
    return this._recipes

  asAction = this.addRecipe
  addRecipe(item) ::
    this._recipes.push @ item
    return this
