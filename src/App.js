import React, { useEffect, useState } from 'react'
import './style.css'

function App() {
    console.log(process.env.TEST)
    // Example hook with eslint error
    // useEffect(() => {
    //     const [state, setState] = useState()
    //     setState('this')
    //     return state
    // })
    return (
        <div className="App">
            <h1>Welcome to Coffee Connect by Javalimos the best team ever</h1>
        </div>
    )
}

export default App
