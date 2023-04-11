import { useEffect, useState } from 'react'

function useFetch(url) {
    const [responses,setRespones] = useState([]);
     useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setRespones(data));
     },[url])
  return responses
}

export default useFetch