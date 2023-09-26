'use client'
import { useState } from 'react';
import CharactersData from '@/components/CharactersData';
import useFetch from '@/components/useFetch';
import './page.css'

const Home = () => {
  const [url, setUrl] = useState('https://rickandmortyapi.com/api/character');
  const { data, isLoading, error } = useFetch(url);

  return (
    <main className="main">
      <CharactersData data={data}/>
    </main>
  )
}


export default Home