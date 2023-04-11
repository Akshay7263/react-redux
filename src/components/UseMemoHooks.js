//same as usememo //same as use effect
import React, { useMemo, useState } from 'react'

function UseMemoHooks() {
    const [number,setNumber] = useState(0);
   
  

    function expensiveFunction(num){
        console.log("start")
        for(let i=0;i<1000;i++){}
        return num;
    }

    const calculationMemo =   useMemo(()=>{
      return  expensiveFunction(number)
    },[number])
  return (
    <div>
        <input type='number' onChange={(e)=>setNumber(e.target.value)} value={number}/>
        <h2>{calculationMemo}</h2>
    </div>
    
  )
}



export default UseMemoHooks