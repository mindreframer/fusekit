import { style } from "typestyle";
import * as typestyle from "typestyle";
import * as csx from "csx";
import * as csstips from "csstips";

const flexHorizontalGreen = style(csstips.flex, csstips.horizontal, {
  backgroundColor: "green"
});

const niceColors = style({
  transition: "color .2s",
  color: "blue",
  $nest: {
    "&:hover": {
      color: "red"
    }
  }
});

/** Use full window size for application */
typestyle.cssRule("html, body", {
  height: "100%",
  width: "100%",
  padding: 0,
  margin: 0
});

/** Think of it like an inline stylesheet */
namespace MyStyles {
  const color = "red";

  export const alwaysRedClass = style({ color });
  export const onlyRedOnHoverClass = style({
    $nest: {
      "&:hover": { color }
    }
  });
}

const colorAnimationName = typestyle.keyframes({
  "0%": { color: csx.cornflowerblue.toString() },
  "33%": { color: csx.azure.toString() },
  "66%": { color: csx.rebeccapurple.toString() },
  "100%": { color: csx.cornflowerblue.toString() }
});

const ooooClass = typestyle.style({
  animationName: colorAnimationName,
  animationDuration: "2s",
  animationIterationCount: "infinite"
});

function roundCorners(radius: string = "5px") {
  return {
    "-webkit-border-radius": radius,
    "-moz-border-radius": radius,
    borderRadius: radius,
    "-moz-background-clip": "padding",
    "-webkit-background-clip": "padding-box",
    backgroundClip: "padding-box"
  };
}

const mainButtonClass = style(bordered("solid"), roundCorners("0.5rem"), {
  backgroundColor: "yellow"
});

function bordered(type: string) {
  return {
    border: `${type} thin green`
  };
}

/// this will give you the full CSS definition
// const styleTag = `<style>${typestyle.getStyles()}</style>`;
// console.log(styleTag);

export{
  flexHorizontalGreen,
  ooooClass,
  niceColors
}
