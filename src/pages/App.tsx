import * as React from "react";
const { Component } = React;
import { observable } from "mobx";
import { observer, inject } from "mobx-react";
import RootStore from "../stores/RootStore";

import {CTA, ProductCard, Albums, FullColorPage, FollowerNotifications, Navigation} from "../components/cta"

interface ComponentProps {
}

interface InjectedProps extends ComponentProps {
  rootStore: RootStore;
}

const classes = {
  topContainer: " f4",
  counterContainer: "f5 pv4 ph2 pt1  bg-orange"
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
        <Navigation />
        {this.counterComp()}
        <CTA title={"Awesome news!"} desc={"We have a new product online "} cta={"Check it out!"} />
        <Albums />
        <FullColorPage />
        <FollowerNotifications />
      </div>
    );
  }

  counterComp = () => {
    let { rootStore } = this.injected;
    return(
      <div className={classes.counterContainer}>
        App on {rootStore.viewStore.page}
        Counter ... {this.count}
        <br />
        <button onClick={this.handleInc}> + </button>
        <button onClick={this.handleDec}> - </button>
      </div>
    )
  }

  handleInc = () => {
    this.count = this.count + 1;
  };
  handleDec = () => {
    this.count = this.count - 1;
  };
}
export default App
