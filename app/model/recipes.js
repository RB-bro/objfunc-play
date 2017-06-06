global.Observable = require("zen-observable")
const {ObjectFunctional} = require("object-functional")
const initialState = require("./recipe.json")

export class RecipeStore extends ObjectFunctional ::
  asAction = this.init
  init() ::
    this._recipes = initialState.recipes.slice()
    return this

  getRecipes() ::
    return this._recipes

  asAction = this.addRecipe
  addRecipe(item) ::
    this._recipes = this._recipes.concat @ [item]
    return this
