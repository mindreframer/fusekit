import * as React from "react";
const { Component } = React;
import { observable } from "mobx";
import { observer, inject } from "mobx-react";
import RootStore from "../stores/RootStore";



// https://github.com/mobxjs/mobx-react#strongly-typing-inject
interface Props {
  rootStore: RootStore; // needs to be optional bc. of Provider
}

// @inject(allStores => ({
//   view: allStores.view
// }))
@inject("rootStore")
@observer
class App extends Component<Props, any> {
  @observable count = 0;
  render() {
    // console.log(this.props);
    let { rootStore } = this.props;
    return (
      <div>
        App on &nbsp;
        {rootStore.viewStore.page}
        <div>
          Counter {this.count}
          <br />
          <button onClick={this.handleInc}> + </button>
          <button onClick={this.handleDec}> - </button>
        </div>
      </div>
    );
  }

  handleInc = () => {
    this.count = this.count + 4;
  };
  handleDec = () => {
    this.count = this.count - 1;
  };
}

export default App;