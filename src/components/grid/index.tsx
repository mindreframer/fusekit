// https://alistapart.com/article/learning-from-lego-a-step-forward-in-modular-web-design
import * as React from "react";

import "../../styles/grid.scss";

/** Import */
import {style} from "typestyle";
import * as typestyle from "typestyle";
import * as csx from 'csx';
import * as csstips from 'csstips';


const flexHorizontalGreen = style(
  csstips.flex,
  csstips.horizontal,
  { backgroundColor: 'green' }
);

const niceColors = style({
  transition: 'color .2s',
  color: 'blue',
  $nest: {
    '&:hover': {
      color: 'red'
    }
  }
});

/** Use full window size for application */
typestyle.cssRule('html, body', {
  height: '100%',
  width: '100%',
  padding: 0,
  margin: 0,
});


/** Think of it like an inline stylesheet */
namespace MyStyles {
  const color = 'red';

  export const alwaysRedClass = style({color});
  export const onlyRedOnHoverClass = style({
    $nest:{
      '&:hover':{color}
    }
  });
}


const colorAnimationName = typestyle.keyframes({
  '0%': { color: csx.cornflowerblue.toString() },
  '33%': { color: csx.azure.toString() },
  '66%': { color: csx.rebeccapurple.toString() },
  '100%': { color: csx.cornflowerblue.toString() }
})

const ooooClass = typestyle.style({
  animationName: colorAnimationName,
  animationDuration: '2s',
  animationIterationCount: 'infinite',
});


function roundCorners(radius: string = '5px') {
  return {
    '-webkit-border-radius': radius,
    '-moz-border-radius': radius,
    borderRadius: radius,
    '-moz-background-clip': 'padding',
    '-webkit-background-clip': 'padding-box',
    backgroundClip: 'padding-box'
  }
}

const mainButtonClass = style(
  bordered('solid'),
  roundCorners('0.5rem'),
  {backgroundColor: "yellow"},
);


function bordered(type: string) {
  return {
    border: `${type} thin green`
  };
}

/** convert a style object to a CSS class name */
const className = style(
  {color: 'red', backgroundColor: 'green'}
);


const styleTag = `<style>${typestyle.getStyles()}</style>`
console.log(styleTag)

const GridLayout: React.StatelessComponent<{}> = () => {
  return (
    <div className="wrap">
      <header className={"pl4"}>
        <a href="https://alistapart.com/article/learning-from-lego-a-step-forward-in-modular-web-design">based on Learning from Lego</a>
      </header>


      <div className={flexHorizontalGreen}>
        <div>One</div>
        <div>Two</div>
        <div>Three</div>
      </div>

      <h1 className={ooooClass}>Hello world, fuck yeah!!!</h1>



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
                <div className="content">
                  H
                  &nbsp;
                  <button className={niceColors}>
                      SUBMIT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { GridLayout };
