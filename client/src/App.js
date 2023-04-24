import axios from 'axios'
import { useState, useEffect } from 'react';
import {Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { connect } from "react-redux"

import './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Error from './components/Error/Error';
import Form from './components/Forms/Form';
import Favorites from './components/Favorites/Favorites';
import { removeFav } from './redux/action';


const URL_BASE='https://be-a-rym.up.railway.app/api/character'
const API_KEY = '8084360b4c34.9565dd748a2bc62f3aa9'
const URL='http://localhost:3001/rickandmorty/login'

function App(props) {
   let [characters, setCharacters] = useState([])

   const navigate = useNavigate();
   let [access, setAccess] = useState(false)
   const EMAIL='aufer@email.com'
   const PASSWORD='123456'

   function login(userData) {
      const {email, password} = userData

      axios(`${URL}?email=${email}&password=${password}`)
         .then(({data})=>{
            
            const {access} = data
            setAccess(access);
            access && navigate('/home');
         })
   }

   function logout(){
      setAccess(false);
      navigate('/');
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access, navigate]);
      
   const onSearch = (id) => {
      //setCharacters(characters.concat(data))
      //setCharacters([...characters, data])
      for(const character of characters){
         if(character.id === id) {
            return window.alert('¡El ID ya fue agregado!');
         }
      }

      //axios(`${URL_BASE}/${id}?key=${API_KEY}`)
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
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
      setCharacters(characters.filter((character) => character.id !== id))
      
      // eliminar de favoritos
      props.removeFav(id)
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
            <Route path='/favorites' element={<Favorites onClose={onClose}/>}/>
            <Route path='*' element={<Error/>}/>
         </Routes>
         
      </div>
   );
}

const mapStateToProps = (state) =>{
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) =>{
   return {
      removeFav: (id) => {
         dispatch(removeFav(id))
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
