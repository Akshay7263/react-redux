

 import React, { useEffect, useState } from 'react'
 
 function UseEffectHook() {
    const [count,setCount]=useState(0)
    useEffect(()=>{
        document.title = `${count} document`
    })

   return (
     <div>
        <button onClick={()=>setCount(count+1)}>change document title </button>
     </div>
     
   )
 }
 
 export default UseEffectHook