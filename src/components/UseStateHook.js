import React, { useState } from 'react'

function UseStateHook() {
    const [count,setCount] = useState(0);
    const [info,setInfo] = useState({})
    const setValue= (e)=>{
       setInfo(prev => ({...prev,[e.target.name]:e.target.value}))
    }

  return (
    <div>
        <h1>counter : {count}</h1>
        <button onClick={()=>{setCount(count+1)}}>Increase counter</button>
        <h5>--------------------user details----------------------------------</h5>
        <input type='text'name='name' onChange={setValue} placeholder='name' />
        <input type='text'name='city' onChange={setValue} placeholder='city'/>
        <h5> ______________________________________________________________</h5>
        <h4>user name : {info.name}</h4>
        <h4>user city : {info.city}</h4>
    </div>
  )
}

export default UseStateHook