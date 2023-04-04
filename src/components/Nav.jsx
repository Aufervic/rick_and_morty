import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Nav = ({onSearch}) => {

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
    </div>
  )

}

export default Nav;