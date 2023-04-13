import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import { addFav, removeFav} from '../../redux/action'
import style from './Card.module.css'

function Card(props) {
   let [isFav, setIsFav] = useState(false)


   useEffect(()=>{
      props.myFavorites.forEach( fav => {
         if(fav.id === props.id){
            setIsFav(true)
         }
      });
   }, [props.myFavorites])


   const handleFavorite = () => {
      if(isFav){
         setIsFav(false)
         props.removeFav(props.id)
      }else{
         setIsFav(true)
         props.addFav(props)
      }
   }

   return (
      <div className={style.Card}>
         {<button onClick={handleFavorite} className={style.btnFav}>{isFav?'❤️':'🤍'}</button>}
         <button onClick={()=> props.onClose(props.id)} className={style.btnClose}>X</button>
         <NavLink to={`/detail/${props.id}`} className={style.navLink}>
            
            <p className={style.characterID}>{props.id}</p>
            <img src={props.image} alt='' className={style.img} />

            <div className={style.info}>
               <p className={style.characterName}>{props.name}</p>
               <p className={style.characterOrigin}>🌌 {props.origin}</p>
               <p className={style.characterData}>{props.status}</p>
               <p className={style.characterData}>{props.species}</p>
               <p className={style.characterData}>{props.gender}</p>
            </div>
         </NavLink>
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => {
         dispatch(addFav(character))
      },
      removeFav: (id) => {
         dispatch(removeFav(id))
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)