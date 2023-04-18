import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import style from './Detail.module.css'

const Detail = () => {
  let {id} = useParams()
  let [character, setCharacter] =  useState({})

  useEffect(() => {
    //axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
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
      <h2>Cargando...</h2>
    )
  
  return (
    <div className={style.Container}>
      <div className={style.Card}>
        <p className={style.characterID}>{character.id}</p>
       

          <img src={character.image} alt='' className={style.Img}/>
          <div className={style.Info}>
            <div className={style.InfoItem}>
              <span className={style.InfoItemName}>Nombre: </span>
              <span className={style.InfoItemValue}>{character.name}</span> 
            </div>
            <div className={style.InfoItem}>
              <span className={style.InfoItemName}>Status: </span>
              <span className={style.InfoItemValue}>{character.status}</span> 
            </div>
            <div className={style.InfoItem}>
              <span className={style.InfoItemName}>Specie: </span>
              <span className={style.InfoItemValue}>{character.species}</span> 
            </div>
            <div className={style.InfoItem}>
              <span className={style.InfoItemName}>Gender: </span>
              <span className={style.InfoItemValue}>{character.gender}</span> 
            </div>
            <div className={style.InfoItem}>
              <span className={style.InfoItemName}>Origin: </span>
              <span className={style.InfoItemValue}>{character.origin?.name}</span> 
            </div>

          </div>

      </div>
    </div>
  )
  
}
export default Detail