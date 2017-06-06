global.Observable = require("zen-observable")
const {ObjectFunctional} = require("object-functional")

export class AppStore extends ObjectFunctional ::
  asAction = this.init
  init() ::
    this.locations = ['home', 'add']
    this.setLocation @ this.locations[0]
    return this

  asAction = this.setLocation
  setLocation(loc) ::
    this.location = loc
    

  asAction = this.restoreToState
  restoreToState(view) ::
    Object.assign @ this, view
    this.ts_restored = Date.now()
    return this
    
  asAction = this.move
  move(location) ::
    -1 !== this.locations.indexOf(location)
      ? this.setLocation @ this.locations[this.locations.indexOf(location)]
      : this.setLocation @ this.locations[0]
    return this
