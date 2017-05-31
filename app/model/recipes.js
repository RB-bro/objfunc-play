global.Observable = require("zen-observable")
const {ObjectFunctional} = require("object-functional")

export class RecipeStore extends ObjectFunctional ::
  asAction = this.init
  init() ::
    this._log = []

  asAction = this.log
  log(msg) ::

    this._log.push @ msg
    console.log @ "Recipe store!"
