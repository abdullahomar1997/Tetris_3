import { useCallback, useState } from "react"

const buildGameStats = () => ({
    level: 1,
    linesCompleted: 0,
    linesPerLevel: 10,
    points: 0
})

export const useGameStats = () => {

    const [gameStats, setGameStats] = useState(buildGameStats());

    const addLinesCleared = useCallback((lines) => {
        setGameStats(
            (previous) => {
                const points = previous.points + lines * 100;
                const { linesPerLevel } = previous;
                const newLinesCompleyed = previous.linesCompleted + lines;
                const level = newLinesCompleyed >= linesPerLevel
                    ? previous.level + 1
                    : previous.level;
                const linesCompleted = newLinesCompleyed % linesPerLevel;
                return {
                    level,
                    linesCompleted,
                    linesPerLevel,
                    points
                };
            }, [])
    }, []);

    return [gameStats, addLinesCleared];
}