import React, { useState } from 'react'

function Counter() {
    const [count , setCount ] = useState(0);
    return (
        <div>
            <h1>Hello Your Count is {count}</h1>
            <button
            onClick={() => setCount(count + 1)}
            >Increament</button>
        </div>
    )
}

export default Counter
