import React, { useEffect, useState } from 'react'

const Effects = () => {

    const [counter,setCounter]=useState(0)
    const [counter1,setCounter1]=useState(0)

    useEffect(()=>{
        console.log("side Effects")

    },[counter])
  return (
    <div>
        <div>
        <h1>{counter}</h1>
        <button  onClick={()=>setCounter(counter+1)} type='button'>+ </button>
        </div>

        <div>
        <h1>{counter1}</h1>
        <button  onClick={()=>setCounter1(counter1+1)} type='button'>+ </button>
        </div>
        
    </div>
  )
}

export default Effects