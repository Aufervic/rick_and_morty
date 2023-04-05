import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';


const Detail = () => {
  let {id} = useParams()
  let [character, setCharacter] =  useState({})

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
  }, [id]);

  //OJO esto se imprime dos veces antes de tener los datos
  //console.log("Aufer origin", character.origin)
  
  if(!Object.keys(character).length)
    return(
      <div>No hay datos</div>
    )
  
  return (
    <div>
      <h2>{character.name}</h2>
      <h2>ESTADO | {character.status}</h2>
      <h2>ESPECIE | {character.especie}</h2>
      <h2>GÉNERO | {character.género}</h2>
      <h2>ORIGEN | {character.origin?.name}</h2>
      <img src={character.image} alt='' />
    </div>
  )
  
}
export default Detail