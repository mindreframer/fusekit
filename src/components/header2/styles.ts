/** Import */
import {style} from "typestyle";
import * as typestyle from "typestyle";
import * as csx from 'csx';
import * as csstips from 'csstips';

/** Think of it like an inline stylesheet */
namespace MyStyles {
  const color = 'red';

  export const greenClass = style({color: 'green'});
  export const greenClassHover = style({
    $nest:{
      '&:hover':{color}
    }
  });
}

export {MyStyles}
