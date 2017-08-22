import { Provider } from "mobx-react";
import * as React from "react";
import * as ReactDOM from "react-dom";


import App from "./pages/App";
import stores from "./stores/"

let container = document.createElement("div");
container.setAttribute("id", "root");
document.body.appendChild(container);

ReactDOM.render(
  <Provider  { ...stores }>
    <App />
  </Provider>,
  document.getElementById("root")
);
