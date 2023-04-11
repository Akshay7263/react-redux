import React from 'react'
import useFetch from '../customhooks/useFetch'

function UseCustomHook() {
  
const data = useFetch(`https://fakestoreapi.com/products/`)
  return (
    <div>{
      data.map(res=>{
        return (
          <h4 key={res.id}>
            {res.title}
          </h4>
        )
      })}</div>
  )
}

export default UseCustomHook