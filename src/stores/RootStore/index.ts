import ViewStore from "../ViewStore/"

class RootStore {
  viewStore:ViewStore

  constructor() {
    this.viewStore = new ViewStore({ root: this })
    // this.sessionStore = new SessionStore({ root: this })
  }
}

export default RootStore
