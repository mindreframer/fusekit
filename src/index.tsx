import { Provider } from "mobx-react";
import * as React from "react";
import * as ReactDOM from "react-dom";
// import './plugins/hmr';


import App from "./pages/App";
// import RootStore from './stores/RootStore'
import rootStore from "./stores/cached"

let container = document.createElement("div");
container.setAttribute("id", "root");
document.body.appendChild(container);

import "./styles/index.scss";
import "./styles/foo.scss";
import "./vendor/purple3.min.css";

// require("tachyons/tachyons.css")
ReactDOM.render(
  <Provider  { ...{rootStore: rootStore} }>
    <App />
  </Provider>,
  document.getElementById("root")
);


// TODO: could also try this one
// https://github.com/fuse-box/fuse-box-ts-react-reflux-seed/blob/master/src/client/application.tsx

import { setStatefulModules } from './plugins/hmr2';
setStatefulModules('hmr', 'stores/', 'actions/');

// Custom HMR, will forcefully reload if you edit a store file or
// one listed under fullPaths - Keeps state in sync
// import { setStatefulModules } from 'fuse-box/modules/fuse-hmr';


// setStatefulModules((name) => {
//   // console.log(name)
//   return /stores/.test(name) || /client\/index/.test(name) || /rendered\/state/.test(name);
// });
