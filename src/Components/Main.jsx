import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import Pokeinfo from './Pokeinfo';

function Home()
{
  return <Main/>
}

function Main() {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon`);
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [pokeDex, setPokeDex] = useState();

  const getPokemon = async (res) => {
    try {
      const newData = await Promise.all(
        res.slice(0, 12).map(async (item) => {
          const result = await axios.get(item.url);
          return result.data;
        })
      );
      return newData;
    } catch (error) {
      console.error("Error fetching Pokemon data:", error);
      return [];
    }
  };

  const pokeFun = async () => {
    setLoading(true);
    try {
      const res = await axios.get(url);
      setNextUrl(res.data.next);
      setPrevUrl(res.data.previous);
      const newData = await getPokemon(res.data.results);
      setPokeData(newData);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    pokeFun();
  }, [url]);

  return (
    <div className="container">
      <div className="left-content">
        <Card pokemon={pokeData} loading={loading} infoPokemon={(poke) => setPokeDex(poke)} />
        <div className="btn-group">
          {prevUrl && (
            <button
              onClick={() => {
                setPokeData([]);
                setUrl(prevUrl);
              }}
            >
              Previous
            </button>
          )}
          {nextUrl && (
            <button
              onClick={() => {
                setPokeData([]);
                setUrl(nextUrl);
              }}
            >
              Next
            </button>
          )}
        </div>
      </div>
      <div className="right-content">
        <Pokeinfo data={pokeDex} />
      </div>
    </div>
  );
}

export default Main;






