import {style} from "typestyle";
import * as typestyle from "typestyle";
import * as csx from 'csx';
import * as csstips from 'csstips';

/** Think of it like an inline stylesheet */
namespace MyStyles {
  const color = 'orange';

  export const alwaysRedClass = style({color});
  export const onlyRedOnHoverClass = style({
    $nest:{
      '&:hover':{color}
    }
  });
}

export {MyStyles}
