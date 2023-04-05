import axios from 'axios'
import { useState, useEffect } from 'react';
import {Routes, Route, useNavigate, useLocation } from 'react-router-dom';

import './App.css';
import Card from './components/Card';
import Cards from './components/Cards';
import SearchBar from './components/SearchBar';
//import characters, { Rick } from './data';
import Nav from './components/Nav';
import About from './components/About';
import Detail from './components/Detail';
import Error from './components/Error';
import Form from './components/form/Form';




function App() {
   let [characters, setCharacters] = useState([])

   const navigate = useNavigate();
   let [access, setAccess] = useState(false)
   const EMAIL='aufervic@email.com'
   const PASSWORD='123456'

   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }

   function logout(){
      setAccess(false);
      navigate('/');
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);
      
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
   

   const {pathname}= useLocation()

   return (
      <div className='App'>
         {pathname !== '/' && <Nav onSearch={onSearch} logout={logout}/>}
         
         <Routes>
            <Route path='/' element={<Form login={login}/>}/>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='*' element={<Error/>}/>
         </Routes>
         
      </div>
   );
}

export default App;
