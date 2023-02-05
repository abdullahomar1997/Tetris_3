import React from 'react'
import { Action, actionForKey, actionIsDrop } from '../../../business/Input'
import { PlayerController } from '../../../business/PlayerController'
import { useDropTime } from '../../../hooks/useDropTime'
import { useInterval } from '../../../hooks/useInterval'
import "./GameController.css"

const GameController = ({
    board,
    gameStats,
    player,
    setGameOver,
    setPlayer
}
) => {

    const [dropTime, pauseDropTime, resumeDropTime] = useDropTime({ gameStats });

    useInterval(() => {
        handleInput({ action: Action.SlowDrop })
    }, dropTime)

    const onKeyUp = ({ code }) => {
        const action = actionForKey(code);
        if (actionIsDrop(action)) resumeDropTime();

    }
    const onKeyDown = ({ code }) => {
        const action = actionForKey(code);

        if (action === Action.Pause) {
            console.log(code)
            if (dropTime) {
                pauseDropTime();
            }
            else {
                resumeDropTime();
            }
        }
        else if (action === Action.Quit) {
            setGameOver(true);
        }
        else {
            if (actionIsDrop(action)) pauseDropTime();
            handleInput({ action });
        }
    }

    const handleInput = ({ action }) => {
        PlayerController({
            action,
            board,
            player,
            setPlayer,
            setGameOver
        })
    }

    return (
        <input
            type="text"
            onKeyDown={onKeyDown}
            onKeyUp={onKeyUp}
            className='GameController'
            autoFocus
        />
    )
}

export default GameController