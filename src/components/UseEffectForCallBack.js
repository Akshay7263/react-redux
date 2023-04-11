

import React, { useEffect, useState } from 'react'

function UseEffectForCallBack() {
    const [count,setCount]=useState(0)
    useEffect(()=>{
       const clearValue =  setInterval(()=>{
        console.log(`interval count ${count}`)
            setCount(count+1)
           
        },2000)

        return () =>{
       console.log(`clean up ${count}`)
      clearInterval(clearValue)
        }
    },[count])
   return (
     <div>
        <h1>{count}</h1>
     </div>
     
   )
}

export default UseEffectForCallBack