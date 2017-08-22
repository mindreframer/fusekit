import { Provider } from "mobx-react";
import * as React from "react";
import * as ReactDOM from "react-dom";
import './plugins/hmr';


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



// Custom HMR, will forcefully reload if you edit a store file or
// one listed under fullPaths - Keeps state in sync
import { setStatefulModules } from 'fuse-box/modules/fuse-hmr';

setStatefulModules((name) => {
    return /stores/.test(name) || /client\/index/.test(name) || /rendered\/state/.test(name);
});
