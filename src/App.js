import React, {useState, useEffect} from 'react'
import Header from './Component/Header';
import Info from './Component/Info';


function App() {

const [newInfo, setNewInfo]=useState([0]);
const [search, setSearch]=useState('');
const [query, setQuery]=useState('South Korea');

useEffect(()=>{
  getNewInfo()
}, [query]);

const getNewInfo = async()=>{
  
  const response=await fetch(`https://covid-19-data.p.rapidapi.com/country?name=${query}`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "d82253dcdcmsh6777c6c3d6110bdp1e95fcjsnbb8830b7ed5a",
      "x-rapidapi-host": "covid-19-data.p.rapidapi.com"
    }
  })
  const data = await response.json();
  console.log(data);
  setNewInfo(data);
}

const updateSearch =(e)=>{
  setSearch(e.target.value);
  console.log(search);
}

const getSearch = e =>{
  e.preventDefault();
  setQuery(search);
  setSearch("");
}

  return (
    <div className="App">
        <div className="newInfo">
        <Header 
          search={search}
          getSearch = {getSearch}
          onChange={updateSearch}
        />
      <Info 
        name={newInfo[0].country}
        death={newInfo[0].deaths}
        Critical={newInfo[0].critical}
        Confirmed={newInfo[0].confirmed}
        Recover={newInfo[0].recovered}
        Upd={newInfo[0].lastUpdate}
        Chg={newInfo[0].lastChange}
      />
        </div>
    </div>
  );
}

export default App;

