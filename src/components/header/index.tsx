// https://alistapart.com/article/learning-from-lego-a-step-forward-in-modular-web-design
import * as React from "react";
import {MyStyles} from "./styles"

const Header: React.StatelessComponent<{}> = () => {
  return (
    <div className={MyStyles.alwaysRedClass.toString()}>
      header1
    </div>
  );
};

export { Header };
