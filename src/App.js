import {Routes, Route} from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react';

import './App.css';
import Card from './components/Card';
import Cards from './components/Cards';
import SearchBar from './components/SearchBar';
//import characters, { Rick } from './data';
import Nav from './components/Nav';
import About from './components/About';
import Detail from './components/Detail';
import Error from './components/Error';



function App() {
   let [characters, setCharacters] = useState([])
   const data = {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
      origin: {
         name: 'Earth (C-137)',
         url: 'https://rickandmortyapi.com/api/location/1',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
   };


   const onSearch = (id) => {
      //setCharacters(characters.concat(data))
      //setCharacters([...characters, data])
      for(const character of characters){
         if(character.id === parseInt(id)) return window.alert('¡El ID ya fue agregado!');
      }

      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      }).catch(()=>window.alert('¡Este ID no existe!'))
   }

   const onClose = (id)=>{
      //setCharacters(characters.filter((character) => parseInt(character.id) !== id))
      setCharacters(characters.filter((character) => character.id !== parseInt(id)))
   }
   
   return (
      <div className='App'>
         {/* <SearchBar onSearch={(characterID) => window.alert(characterID)} /> */}
         <Nav onSearch={onSearch} />
         <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='*' element={<Error/>}/>
         </Routes>
         
      </div>
   );
}

export default App;
