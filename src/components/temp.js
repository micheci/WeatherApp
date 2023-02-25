import React, { useEffect, useState } from 'react'


function Temp() {
    
    const [data,setData]=useState();

    useEffect(()=>{
        fetch('http://localhost:4001')
        .then(response=>{
            setData(response.json())
        })
    },[])

  return (
    <>
    <div>{console.log(1)}</div>
    <div>test</div>
   
    </>
  )
}

export default Temp