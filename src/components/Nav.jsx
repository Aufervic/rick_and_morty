import SearchBar from "./SearchBar";

const Nav = ({onSearch}) => {

  return(
    <div>
      <SearchBar onSearch={onSearch} />
      <button onClick={()=>onSearch(Math.floor(Math.random()*1000))}>Random</button>
    </div>
  )

}

export default Nav;