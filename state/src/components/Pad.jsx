import { useState } from "react"

export default function Pad(props){
    return(
        <>
        <button style={{backgroundColor:props.color}} key={props.id} className={props.on?"on":undefined}  onClick={()=>props.togglepad(props.id)}></button>
        </>
    )
}