import React from 'react';
import Board from './Board';
import Element from './Element';
import './dragdrop.css';
import { Text } from '../../Assets/constant';

const DragAndDrop = () =>{
    return(
        <div className="flexbox">
            <Board id="board-1" className="board">
                <Element id="element-1" className="element">{Text.elementOne}</Element>
            </Board>
            <Board id="board-2" className="board">
                <Element id="element-2" className="element">{Text.elementTwo}</Element>
            </Board>
        </div>
    );
}

export default DragAndDrop;