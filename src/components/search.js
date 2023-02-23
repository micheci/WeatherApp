import { useState } from "react"
// import {useForm} from 'react-hook-form'
// import {withRouter} from 'react-router-dom'

export default function Search(){
    const [searchData,setSearchData]=useState('');

    // async function handleSubmit(e){
    //     e.preventDefault();
       
    //     const response=await fetch('http://localhost:4001/search',{
    //         method:'POST',
    //         body:JSON.stringify({e}),
    //         headers:{'Content-Type':'application/json'}
    //     })
    //     if(response.status===200){
    //         alert('registratoin good')
    //     }else{
    //         alert('failed')
    //     }
    //  }
const handleSubmit=()=> { // Once the form has been submitted, this function will post to the backend
        const postURL = "http://localhost:4001/search" //Our previously set up route in the backend
        fetch(postURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ // We should keep the fields consistent for managing this data later
                searchData
                
            })
        })
        .then(()=>{
            // Once posted, the user will be notified 
            alert('You have been added to the system!');
        
        })
    }

    return(
        <>
          <form className='searchBar'onSubmit={handleSubmit} >
            <label>City:</label>
            <input type='text' placeholder='Location'
                value={searchData}
                onChange={e=>setSearchData(e.target.value)}/>
            <button type="submit">Submit</button>
          </form> 
          </>
    )
}