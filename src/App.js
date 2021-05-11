import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import CharacterGrid from './components/CharacterGrid';
import axios from 'axios';
import Search from './components/Search'

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('all');

  useEffect(() => {
    let fetchData = async () => {
      let data = await axios.get(`https://got-api-vinu.herokuapp.com/api/got/?name=${query}`);
      setData(data.data);
      setLoading(false);
    };
    fetchData();
  }, [query]);

  return (
    <div className='App'>
      <Header></Header>
      <Search search={(q) => setQuery(q)}></Search>
      <CharacterGrid datas={data} isLoading={loading}></CharacterGrid>
    </div>
  );
}

export default App;
