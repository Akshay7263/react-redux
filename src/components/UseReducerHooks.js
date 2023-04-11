import React, { useReducer } from 'react'
const initialState = {count : 0}

const reducer = (state,action) =>{
    switch(action.type){
        case "increase":
            return {count:state.count+1}
        case "decrease":
            return {count:state.count-1}
        default:
           return state
    }

}
function UseReducerHooks() {
    const [state,dispatch] = useReducer(reducer,initialState);
   const increase = () =>{
    dispatch({type:"increase"})
   }
   const decrease = () =>{
    dispatch({type:"decrease"})
   }
  return (
    <div>
        <h1>counter : {state.count}</h1>
        <button onClick={increase}>Increase counter</button>
        <button onClick={decrease}>Increase counter</button>
    </div>
  )
}

export default UseReducerHooks