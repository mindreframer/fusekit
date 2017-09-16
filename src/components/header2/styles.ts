import {style} from "typestyle";

namespace MyStyles {
  const color = 'green';

  export const greenClass = style({color: color});
  export const greenClassHover = style({
    $nest:{
      '&:hover':{color}
    }
  });
}

export {MyStyles}
