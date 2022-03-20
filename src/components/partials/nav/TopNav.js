import { NavBar, Right } from "./Style";
import { Link } from "react-router-dom";
export const TopNav = () => {
  return (
    <NavBar>
      <li>
        <Link to="/">Movie App</Link>
      </li>
      <Right>
        <li>
          <Link to="/my-movies">My movies</Link>
        </li>
        <li>
          <Link to="" >Logout</Link>
        </li>
        <li>
          <Link to="/sign-in">Sign in</Link>
        </li>
        <li>
          <Link to="/sign-up">Sign up</Link>
        </li>
      </Right>
    </NavBar>
  );
};
