import { Provider } from "mobx-react";
import * as React from "react";
import * as ReactDOM from "react-dom";


import App from "./pages/App";
import RootStore from './stores/RootStore'
const rootStore = new RootStore()

let container = document.createElement("div");
container.setAttribute("id", "root");
document.body.appendChild(container);


ReactDOM.render(
  <Provider  { ...{rootStore: rootStore} }>
    <App />
  </Provider>,
  document.getElementById("root")
);
