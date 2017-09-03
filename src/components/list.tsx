import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Bla from 'react-virtualized';
debugger
import { Collection } from 'react-virtualized';

// import 'react-virtualized/styles.css'; // only needs to be imported once

// Collection data as an array of arrays
const list = [
  { name: 'Brian Vaughn', x: 13, y: 34, width: 123, height: 234 },
  { name: 'Brian Vaughn2', x: 13, y: 34, width: 123, height: 234 },
  { name: 'Brian Vaughn3', x: 13, y: 34, width: 123, height: 234 },
  { name: 'Brian Vaughn3', x: 13, y: 34, width: 123, height: 234 }
];

interface Props {
  index: number
  key: string
  style: any
}

function cellRenderer (props:Props) {
  const {key, style, index} = props
  return (
    <div
      key={key}
      style={style}
    >
      {list[index].name}
    </div>
  )
}

function cellSizeAndPositionGetter (props:Props) {
  const {index} = props
  const datum = list[index]

  return {
    height: datum.height,
    width: datum.width,
    x: datum.x,
    y: datum.y
  }
}


const ListExample = ()=> {
  return(
    <Collection
      cellCount={list.length}
      cellRenderer={cellRenderer}
      cellSizeAndPositionGetter={cellSizeAndPositionGetter}
      height={300}
      width={300}
    />
  )
}


export {ListExample}
