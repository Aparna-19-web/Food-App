import React, { useState } from 'react';
import './App.css';
import Products from './Products';

function App() {
  const [search, setSearch]= useState('');
  const [data, setData]=useState([]);
  const YOUR_APP_ID = "46129c52";
  const YOUR_APP_KEY="8e36b0d30feacd10d27e77d5a4099dee";



  const submitHandler = e =>{
    e.preventDefault();
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=12&calories=591-722&health=alcohol-free`).then(response => response.json()).then(
      data => setData(data.hits)
    )
  }
  return (
    <div className="App">
    <center>
    <h4>Food Fire App</h4>
    <form onSubmit={submitHandler}>
    <input type='text' value={search} onChange={(e)=>setSearch(e.target.value)}/><br /><br />
    <input type='submit' value='Search' onClick={submitHandler} className='btn btn-primary'/>
   
    {data.length>=1 ? <Products  data={data}/> : null}
    </form>
    </center>
     
    </div>
  );
}

export default App;
