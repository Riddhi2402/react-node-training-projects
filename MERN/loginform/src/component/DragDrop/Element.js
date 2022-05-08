import React from 'react';
import './element.css';

const Element = (props) => {
    const dragStart = (e) =>{
        const target = e.target;    
        e.dataTransfer.setData('element_id',target.id);
    }

    const dragOver = (e) => {
       e.stopPropagation()
    }

  return (
    <div id={props.id} draggable="true" onDragStart={dragStart} onDragOver={dragOver} className={props.className}>
      {props.children}
    </div>
  );
};
export default Element;
