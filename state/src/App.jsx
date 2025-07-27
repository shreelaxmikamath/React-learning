                            //TASK-1

// import React from "react"
// import { useState } from "react"
// export default function App() {
//     /**
//      * Challenge: 
//      * Create state to track our count value (initial value is 0)
//      * Don't forget to replace the hard-coded "0" with your new state
//      */
//     const [count,setCount]=useState(0)
//     function add() {
//         setCount(prevCount=>prevCount+1)
//     }
//     function sub() {
//         setCount(prevCount=>prevCount-1)
//         setCount(prevCount=>prevCount-1)
//     }
//     return (
//         <main className="container">
//             <h1>How many times will Bob say "state" in this section?</h1>
//             <div className="counter">
//                 <button className="minus" onClick={sub} aria-label="Decrease count">–</button>
//                 <h2 className="count">{count}</h2>
//                 <button className="plus" onClick={add} aria-label="Increase count">+</button>
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
// import starFilled from "/star-filled.png"
// import starEmpty from "/star-empty.png"

// export default function App() {
//     const [contact, setContact] = React.useState({
//         firstName: "John",
//         lastName: "Doe",
//         phone: "+1 (212) 555-1212",
//         email: "itsmyrealname@example.com",
//         isFavorite: true
//     })
//     let starIcon= contact.isFavorite===true?starFilled:starEmpty

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
//                     <button
//                         onClick={toggleFavorite}
//                         aria-pressed={contact.isFavorite}
//                         aria-label={contact.isFavorite===true?"Add to fav":"Remove from fav"}
//                         className="favorite-button"
//                     >
//                         <img
//                             src={starIcon}
//                             alt={contact.isFavorite===true?"filled star icon":"empty star icon"}
//                             className="favorite"
//                         />
//                     </button>
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

export default function App() {
  /**
   * Challenge: see if you can remember how to grab an array of checked
   * items from the dietaryRestrictions checkboxes.
   */

  function signUp(formData) {
    const data = Object.fromEntries(formData)
    const dietaryData = formData.getAll("dietaryRestrictions" )
    console.log(dietaryData)
  }

  return (
    <section>
      <h1>Signup form</h1>
      <form action={signUp}>

        <label htmlFor="email">Email:</label>
        <input id="email" defaultValue="joe@schmoe.com" type="email" name="email" placeholder="joe@schmoe.com" />

        <label htmlFor="password">Password:</label>
        <input id="password" defaultValue="password123" type="password" name="password" />

        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" defaultValue="This is a description"></textarea>

        <fieldset>
          <legend>Employment Status:</legend>
          <label>
            <input type="radio" name="employmentStatus" value="unemployed" />
            Unemployed
        </label>
          <label>
            <input type="radio" name="employmentStatus" value="part-time" />
            Part-time
        </label>
          <label>
            <input type="radio" name="employmentStatus" defaultChecked={true} value="full-time" />
            Full-time
        </label>
        </fieldset>

        <fieldset>
          <legend>Dietary restrictions:</legend>
          <label>
            <input type="checkbox" name="dietaryRestrictions" value="kosher" />
            Kosher
        </label>
          <label>
            <input type="checkbox" name="dietaryRestrictions" value="vegan" />
            Vegan
        </label>
          <label>
            <input type="checkbox" name="dietaryRestrictions" defaultChecked={true} value="gluten-free" />
            Gluten-free
        </label>
        </fieldset>

        <label htmlFor="favColor">What is your favorite color?</label>
        <select id="favColor" name="favColor" defaultValue="" required>
          <option value="" disabled>-- Choose a color --</option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="indigo">Indigo</option>
          <option value="violet">Violet</option>
        </select>

        <button>Submit</button>

      </form>
    </section>
  )
}


