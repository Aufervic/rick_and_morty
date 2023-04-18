import { connect } from "react-redux"
import { useDispatch } from "react-redux"
import { useState } from "react"
import Card from "../Card/Card"
import { filterCards, orderCards } from "../../redux/action"
import style from './Favorites.module.css'


const Favorites = ({myFavorites, onClose}) => {
  const dispatch = useDispatch()

  const [aux, setAux]= useState(false)

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value))
    setAux(!aux)
  }


  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value))
  }

  return (
    <div className={style.Container}>
      <select name="order" id="1" onChange={handleOrder}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>
      <select name="filter" id="2" onChange={handleFilter}>
        <option value="all">All</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>

      </select>
      <div className={style.Cards}>
        {myFavorites.map((character) =>{
          return (
            
              <Card key={character.id}
                id={character.id}
                name={character.name}
                status={character.status}
                species={character.species}
                gender={character.gender}
                origin={character.origin}
                image={character.image}
                onClose={onClose}
              />
        
          )
        })}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites
  }
}

export default connect(mapStateToProps, null)(Favorites)