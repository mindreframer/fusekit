// https://alistapart.com/article/learning-from-lego-a-step-forward-in-modular-web-design
import * as React from "react";

import "../styles/grid.scss";

const GridLayout: React.StatelessComponent<{}> = () => {
  return (
    <div className="wrap">
      <header className={"pl4"}>
        <a href="https://alistapart.com/article/learning-from-lego-a-step-forward-in-modular-web-design">based on Learning from Lego</a>
      </header>

      <div className="container card">
        <div className="flex row structure">
          <div className="flex row structure-1">
            <div className="flex element a">
              <div className="content">A</div>
            </div>
            <div className="flex element b">
              <div className="content">B</div>
            </div>
            <div className="flex col structure-1-2-1">
              <div className="flex element c">
                <div className="content">C</div>
              </div>
              <div className="flex element d">
                <div className="content">D</div>
              </div>
            </div>
            <div className="flex element e">
              <div className="content">E</div>
            </div>
          </div>
          <div className="flex row structure-2">
            <div className="flex element f">
              <div className="content">F</div>
            </div>
            <div className="flex col structure-2-2">
              <div className="flex element g">
                <div className="content">G</div>
              </div>
              <div className="flex element h">
                <div className="content">H</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { GridLayout };
