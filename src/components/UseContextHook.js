import React, { useContext, useEffect, useState } from 'react'
import { VarContext } from '../App';

function UseContextHook() {

 const name =  useContext(VarContext)  
  return (
    <div>{name}</div>
  )
}

export default UseContextHook