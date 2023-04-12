import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import { addFav, removeFav} from '../../redux/action'
import { useState, useEffect } from 'react';

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
      <div>
         {
            isFav?(
               <button onClick={handleFavorite}>❤️</button>
            ):(
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         <button onClick={()=> props.onClose(props.id)}>X</button>
         <h2><Link to={`/detail/${props.id}`}>{props.name}</Link></h2>
         <h2>{props.status}</h2>
         <h2>{props.especie}</h2>
         <h2>{props.género}</h2>
         <h2>{props.origin}</h2>
         <img src={props.image} alt='' />
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