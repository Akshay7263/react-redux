//dimension same as useEffect

import React, { useLayoutEffect, useRef, useState } from 'react'

function UseLayoutEffectHook() {
    const [padding,setPadding] = useState(0)
    const txtRef = useRef();
    useLayoutEffect(()=>{
      if(txtRef.current){
          txtRef.current.style.paddingTop = `${padding}px`
      }
  },[padding])

 const setPaddingValue = () =>{
  setPadding(padding+1)
  }
  return (
    <div>
       <button onClick={setPaddingValue}>click me</button>
       <h3>{padding}px</h3>
        <h2 ref={txtRef}>padding from top</h2>
       <h1 >hii</h1>
    </div>
  )
}

export default UseLayoutEffectHook