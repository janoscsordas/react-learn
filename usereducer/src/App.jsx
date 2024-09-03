import { useEffect, useReducer, useRef, useState } from "react"

import Zene from "./assets/Zene.mp3"

function reducer(state, action) {
    switch (action.type) {
        case "increment":
            return state + 1
        case "decrement":
            return state - 1
        case "reset":
            return 0
        default:
            return state
    }
}

function Timer() {
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef()

    const startTimer = () => {
        intervalRef.current = setInterval(() => {
            setTimer((prevTimer) => prevTimer + 1)
        }, 1000)
    }

    const stopTimer = () => {
        clearInterval(intervalRef.current)
    }

    return (
        <>
            <p>Timer: {timer} seconds</p>
            <button onClick={startTimer}>Start Timer</button>
            <button onClick={stopTimer}>Stop Timer</button>
        </>
    )
}

function App() {
    const [count, dispatch] = useReducer(reducer, 0)
    const ref = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)

    useEffect(() => {
        if (isPlaying) {
            ref.current.play()
        } else {
            ref.current.pause()
        }
    }, [isPlaying])

    return (
        <>
            <div>
                <h1>Adjust number</h1>
                <span>{count}</span>
                <button onClick={() => dispatch({ type: "increment" })}>+</button>
                <button onClick={() => dispatch({ type: "decrement" })}>-</button>
                <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
                <audio src={Zene} loop playsInline ref={ref}></audio>
                <button onClick={() => setIsPlaying(!isPlaying)}>{isPlaying ? "Pause" : "Play"}</button>
            </div>
            <div>
                <Timer />
            </div>
        </>
    )
}

export default App
