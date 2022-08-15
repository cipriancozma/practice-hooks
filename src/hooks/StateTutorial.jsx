import React, { useState } from 'react'

function StateTutorial() {
    const [counter, setCounter] = useState(0);

    const handleIncrement = () => setCounter(prevCount => prevCount + 1)

    return (
        <div>
            Hi, {counter}
            <button onClick={handleIncrement}>Increment</button>
        </div>
    )
}

export default StateTutorial
