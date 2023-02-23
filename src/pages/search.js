import { useState } from "react"

export default function Search(){

    const [searchData,setSearchData]=useState('');

    async function register(e){
        e.preventDefault();
       
        const response=await fetch('http://localhost:4001/search',{
            method:'POST',
            body:JSON.stringify({name:searchData}),
            headers:{'Content-Type':'application/json'}
        })
        if(response.status===200){
            alert('registratoin good')
        }else{
            alert('failed')
        }
     }


    return(
        <>
        <h4>Location</h4>
          <form className='searchBar' onSubmit={register}>
            <input type='text' placeholder='Location'
                value={searchData}
                onChange={e=>setSearchData(e.target.value)}></input>
          </form> 
          </>
    )
}