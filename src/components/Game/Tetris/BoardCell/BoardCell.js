import "./BoardCell.css"

import React from 'react'

const BoardCell = ({ cell }) => {
    return (
        <div className={`BoardCell ${cell.className}`} >
            <div className="Sparkle" >

            </div>
        </div>)
}

export default BoardCell;
