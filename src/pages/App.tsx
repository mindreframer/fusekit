import * as React from "react";
const { Component } = React;
import { observable } from "mobx";
import { observer, inject } from "mobx-react";
import ViewStore from "../stores/ViewStore";



// https://github.com/mobxjs/mobx-react#strongly-typing-inject
interface Props {
  view?: ViewStore; // needs to be optional bc. of Provider
}

// @inject(allStores => ({
//   view: allStores.view
// }))
@inject("view")
@observer
class App extends Component<Props, any> {
  @observable count = 0;
  render() {
    // console.log(this.props);
    let { view } = this.props;
    return (
      <div>
        Ap on &nbsp;
        {view.currentUrl}
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
    this.count = this.count + 1;
  };
  handleDec = () => {
    this.count = this.count - 1;
  };
}

export default App;