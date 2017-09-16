// https://alistapart.com/article/learning-from-lego-a-step-forward-in-modular-web-design
import * as React from "react";
import {MyStyles} from './styles'

const Header2: React.StatelessComponent<{}> = () => {
  return (
    <div className={MyStyles.greenClassHover.toString()}>
      header2
    </div>
  );
};

export { Header2 };
