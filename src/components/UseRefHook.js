import React, { useEffect, useRef, useState } from 'react'

function UseRefHook() {
    const [name,setName] = useState("")
    const count = useRef(0)
    const inputEle = useRef();

    useEffect(()=>{
        count.current+=1
    })
    const setColor = () =>{
        inputEle.current.style.color = "blue"
    }
  return (
    <div>
        <input type='text' onChange={e=>setName(e.target.value)} />
        <h2 ref={inputEle}>{name}</h2>
        <h2>render : {count.current}</h2>
        <button onClick={setColor}>click to change color</button>
    </div>
  )
}

export default UseRefHook