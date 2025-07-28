                            // TASK-1

// import React from "react"
// import Count from "./components/count"
// export default function App() {
//     const [count, setCount] = React.useState(0)

//     function add() {
//         setCount(prevCount => prevCount + 1)
//     }

//     function subtract() {
//         setCount(prevCount => prevCount - 1)
//     }
    
//     /**
//      * Challenge:
//      * - Create a new component called `Count`
//      *    - It should receive a prop called `number`, whose value
//      *      is the current value of our count
//      *    - Have the component render the h2.count element below
//      *      and display the incoming prop `number`
//      * - Replace the h2.count below with an instance of
//      *   the new Count component, passing the correct value
//      *   to its `number` prop.
//      * - After doing this, everything should be working the
//      *   same as before.
//      */

//     return (
//         <main className="container">
//             <div className="counter">
//                 <button
//                     className="minus"
//                     onClick={subtract}
//                     aria-label="Decrease count"
//                 >-</button>

//                 <Count number={count} />

//                 <button
//                     className="plus"
//                     onClick={add}
//                     aria-label="Increase count"
//                 >+</button>
//             </div>
//         </main>
//     )
// }

                            // TASK-2

// import { useState } from "react"
// export default function App() {
    
//     const [isGoingOut ,setisGoingOut]=useState(false)
//     function togglevalue() {
//         setisGoingOut(prevValue=>!prevValue)
//     }
//     return (
//         <main>
//             <h1 className="title">Do I feel like going out tonight?</h1>
//             <button className="value" onClick={togglevalue}>{isGoingOut===true?"yes":"No"}</button>
//         </main>
//     )
// }

                            // TASK-3

// import { useState } from "react"
// export default function App() {
//   /**
//      * Challenge: Convert the code below to use an array
//      * held in state instead of a local variable. Initialize 
//      * the state array as an empty array
//      * 
//      * Don't worry about fixing `addFavoriteThing` quite yet.
//      */

//   const [myFavoriteThings,setmyFavoriteThings] =useState([])
//   const allFavoriteThings = ["💦🌹", "😺", "💡🫖", "🔥🧤", "🟤🎁", 
//   "🐴", "🍎🥧", "🚪🔔", "🛷🔔", "🥩🍝"]
//   const thingsElements = myFavoriteThings.map(thing => <p key={thing}>{thing}</p>)


//   function addFavoriteThing() {
//     setmyFavoriteThings(prevmyFavoriteThings=>[...myFavoriteThings,allFavoriteThings[prevmyFavoriteThings.length]])
//   }

//   return (
//     <main>
//       <button onClick={addFavoriteThing}>Add item</button>
//       <section aria-live="polite">
//         {thingsElements}
//       </section>
//     </main>
//   )
// }

                            // TASK-4

// import React from "react"
// import Star from "./components/Star"
// export default function App() {
//     const [contact, setContact] = React.useState({
//         firstName: "John",
//         lastName: "Doe",
//         phone: "+1 (212) 555-1212",
//         email: "itsmyrealname@example.com",
//         isFavorite: false
//     })

//     function toggleFavorite() {
//         setContact(prevContact=>({
//             ...prevContact,
//             isFavorite:! prevContact.isFavorite
//           })
//         )
//     }

//     return (
//         <main>
//             <article className="card">
//                 <img
//                     src="/user.png"
//                     className="avatar"
//                     alt="User profile picture of John Doe"
//                 />
//                 <div className="info">

//                         <Star isFilled={contact.isFavorite} onClick={toggleFavorite}/>

//                     <h2 className="name">
//                         {contact.firstName} {contact.lastName}
//                     </h2>
//                     <p className="contact">{contact.phone}</p>
//                     <p className="contact">{contact.email}</p>
//                 </div>

//             </article>
//         </main>
//     )
// }              

                            // TASK-5



/**
 * Challenge: add another label and input for the password field
 */

// export default function App() {
//   /**
//    * Challenge: see if you can remember how to grab an array of checked
//    * items from the dietaryRestrictions checkboxes.
//    */

//   function signUp(formData) {
//     const data = Object.fromEntries(formData)
//     const dietaryData = formData.getAll("dietaryRestrictions" )
//     console.log(dietaryData)
//   }

//   return (
//     <section>
//       <h1>Signup form</h1>
//       <form action={signUp}>

//         <label htmlFor="email">Email:</label>
//         <input id="email" defaultValue="joe@schmoe.com" type="email" name="email" placeholder="joe@schmoe.com" />

//         <label htmlFor="password">Password:</label>
//         <input id="password" defaultValue="password123" type="password" name="password" />

//         <label htmlFor="description">Description:</label>
//         <textarea id="description" name="description" defaultValue="This is a description"></textarea>

//         <fieldset>
//           <legend>Employment Status:</legend>
//           <label>
//             <input type="radio" name="employmentStatus" value="unemployed" />
//             Unemployed
//         </label>
//           <label>
//             <input type="radio" name="employmentStatus" value="part-time" />
//             Part-time
//         </label>
//           <label>
//             <input type="radio" name="employmentStatus" defaultChecked={true} value="full-time" />
//             Full-time
//         </label>
//         </fieldset>

//         <fieldset>
//           <legend>Dietary restrictions:</legend>
//           <label>
//             <input type="checkbox" name="dietaryRestrictions" value="kosher" />
//             Kosher
//         </label>
//           <label>
//             <input type="checkbox" name="dietaryRestrictions" value="vegan" />
//             Vegan
//         </label>
//           <label>
//             <input type="checkbox" name="dietaryRestrictions" defaultChecked={true} value="gluten-free" />
//             Gluten-free
//         </label>
//         </fieldset>

//         <label htmlFor="favColor">What is your favorite color?</label>
//         <select id="favColor" name="favColor" defaultValue="" required>
//           <option value="" disabled>-- Choose a color --</option>
//           <option value="red">Red</option>
//           <option value="orange">Orange</option>
//           <option value="yellow">Yellow</option>
//           <option value="green">Green</option>
//           <option value="blue">Blue</option>
//           <option value="indigo">Indigo</option>
//           <option value="violet">Violet</option>
//         </select>

//         <button>Submit</button>

//       </form>
//     </section>
//   )
// }

                            // TASK-6

//             import React from "react";

// export default function App() {
//   const [messages, setMessages] = React.useState(["a"]);

//   // Challenge:
//   // - If there are no unread messages, display "You're all caught up!"
//   // - If there's exactly 1 unread message, it should read "You have 1 unread message" (singular)
//   // - If there are > 1 unread messages, display "You have <n> unread messages" (plural)

//   return (
//     <div>
//       { messages.length>0? messages.length==1? <h1>You have 1 unread message</h1>:<h1>You have {messages.length} unread messages</h1>:<h1>You're all caught up!</h1>}
//     </div>
//   );
// }
                            // TASK-7
import { useState } from "react"
import pads from "./pads"
import Pad from "./components/Pad"
export default function App(props) {
    const [pad,setPads]=useState(pads)


    const padElements = pad.map((item) => {
  return <Pad color={item.color} id={item.id}/> ;
   });
    return (
        <main>
            <div className="pad-container">
                {padElements}
            </div>
        </main>
    )
}                       

              
