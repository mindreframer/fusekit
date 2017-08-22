import * as React from "react";
const { Component } = React;
import { observable } from "mobx";
import { observer, inject } from "mobx-react";
import RootStore from "../stores/RootStore";

interface ComponentProps {
}

interface InjectedProps extends ComponentProps {
  rootStore: RootStore;
}

@inject("rootStore")
@observer
class App extends Component<ComponentProps, any> {
  get injected() {
    return this.props as InjectedProps;
  }
  @observable count = 0;
  render() {
    let { rootStore } = this.injected;
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
export default App
