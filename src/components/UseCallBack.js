//same as use memo,same as use effect

import React, { useCallback, useState } from 'react'
import PrintTable from './PrintTable';
function UseCallBack() {
    const [number,setNumber] = useState(0);
    const [count,setCount] = useState(0);
    // const calculate = () =>{
      
    //     return [number * 1,number * 2 , number * 4 ,number*5]
    // }
    const calculate =   useCallback(()=>{
        return [number * 1,number * 2 , number * 4 ,number*5]
    },[number])
  return (
    <div>
         <button onClick={()=>{setCount(count+1)}}>Increase counter</button>
         <h1>{count}</h1>
        <input onChange={(e)=>setNumber(e.target.value)}/>
        <PrintTable calculateTable = {calculate} />
    </div>
  )
}

export default UseCallBack