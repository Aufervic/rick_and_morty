import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const Nav = ({onSearch, logout}) => {

  return(
    <div>
      <SearchBar onSearch={onSearch} />
      <Link to='/home'>
        <button>Home</button>
      </Link>
      <Link to='/about'>
        <button>About</button>
      </Link>
      <button onClick={()=>onSearch(Math.floor(Math.random()*826)+1)}>Random</button>
      <button onClick={logout}>Log out</button>
    </div>
  )
}

export default Nav;