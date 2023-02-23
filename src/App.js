import './App.css';
import {useEffect,useState} from 'react'
import Search from './pages/search';



function App() {
  //const [data,setData]=useState([{name:"default"}])

  // const fetchData=()=>{
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'X-RapidAPI-Key': '67d628f24dmsh30640eb40d010d8p1e1b4cjsn0d847e304a46',
  //       'X-RapidAPI-Host': 'dark-sky.p.rapidapi.com'
  //     }
  //   };
    
  //   fetch('https://dark-sky.p.rapidapi.com/44,-96?units=auto&lang=en', options)
  //     .then(response => response.json())
  //     .then(response => setData(response.currently))
  //     .catch(err => console.error(err));}

//   useEffect(() => {
//     fetchData()
// }, []);

  

  return (
    <div className="App">
      <header className="App-header">
        <div className='card'>
          <Search/>
          
          {/* <h1>{data.temperature}</h1>
          
          <div className='flex'>
          <p>{data.humidity}</p>
          <p>{data.summary}</p>
          <p>{data.windSpeed}</p>
          </div>

         {Date.now() }
          <p>{data.time}</p> */}
          
        </div>
      </header>
      
    </div>
  );
}

export default App;
