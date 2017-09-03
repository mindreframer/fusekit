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

const classes = {
  topContainer: "bg-orange f4",
  counterContainer: "f5 pv4 ph2"
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
      <div className={classes.topContainer}>
        App on {rootStore.viewStore.page}
        <div className={classes.counterContainer}>
          Counter ... {this.count}
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
export default App
