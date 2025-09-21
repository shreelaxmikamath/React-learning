import './index.css'
import { useEffect } from 'react'
import React from "react"
                                     //TASK-1
// export default function App(props) {
//     const [starWarsData, setStarWarsData] = React.useState(null)

//     /**
//      * Challenge:
//      * Instead of console logging the data, save it in state
//      * and display it to the page. (Just replace the hard-coded
//      * object inside the <pre> element with the data)
//      */
//     console.log("Rendered")
//     useEffect(() => {
//       console.log("Fetched")
//     fetch("https://randomuser.me/api/")
//         .then(res => res.json())
//         .then(data => setStarWarsData(data))

//     },[]);
   
//     return (
//         <div>
//             <pre>{JSON.stringify(starWarsData,null,2)}</pre>
//         </div>
//     )
// }

                                     //TASK-2
// export default function App() {
//     const [starWarsData, setStarWarsData] = React.useState({})
//     const [count, setCount] = React.useState(1)

//     /**
//      * Challenge part 2:
//      * Combine the "count" state with the request URL
//      * so that pressing the "Get next character" button
//      * will get a new character from the Star Wars API.
//      * Remember to consider the dependencies array!
//      */

//     React.useEffect(() => {
//         fetch(`https://jsonplaceholder.typicode.com/users/${count}`)
//             .then(res => res.json())
//             .then(data => setStarWarsData(data))
//     }, [count])

//     return (
//         <div>
//             <h2>The count is {count}</h2>
//             <button onClick={() => setCount(prevCount => prevCount + 1)}>Get next character</button>
//             <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
//         </div>
//     )
// }

                                     
                                     //TASK-3
import WindowTracker from "./WindowTracker"
import { useState } from 'react'
export default function App() {
    /**
     * Challenge:
     * 1. Create state called `show`, default to `true`
     * 2. When the button is clicked, toggle `show`
     * 3. Only display `<WindowTracker>` if `show` is `true`
     */
    const [show, setshow] = useState(true);
    function toggleshow(){
        setshow(prevshow=>!prevshow)
        console.log(show)
    }
    return (
        <main className="container">
            <button onClick={toggleshow}>
                Toggle WindowTracker
            </button>
            
             {show && <WindowTracker />}   
        </main>
    )
}
