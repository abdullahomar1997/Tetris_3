import React from 'react'
import { useGameOver } from '../../hooks/useGameOver';
import Menu from './Menu/Menu'
import Tetris from './Tetris/Tetris';

const Game = ({ rows, columns }) => {

    const [gameOver, setGameOver, resetGameOver] = useGameOver();

    const start = () => {
        resetGameOver();
        console.log(`Game over is ${gameOver}`)
    }

    return (
        <div>

            {
                gameOver ?
                    (<Menu onClick={start} />) : (
                        <Tetris rows={rows} columns={columns} setGameOver={setGameOver} />)
            }

        </div>
    )
}

export default Game