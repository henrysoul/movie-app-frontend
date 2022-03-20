import { NavBar, Right } from "./Style";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
export const TopNav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loggedIn } = useSelector((state) => state.auth);
  const logout = (e) => {
    e.preventDefault();
    localStorage.clear();
    dispatch({ type: "TOGGLE_LOGGED_IN" });
    navigate("/");
  };
  return (
    <NavBar>
      <li>
        <Link to="/">Trending movies</Link>
      </li>
      <Right>
        {loggedIn ? (
          <>
            <li>
              <Link to="/my-movies">My movies</Link>
            </li>
            <li>
              <Link to="" onClick={logout}>
                Logout
              </Link>
            </li>
          </>
        ) : (
          <>
            {" "}
            <li>
              <Link to="/sign-in">Sign in</Link>
            </li>
            <li>
              <Link to="/sign-up">Sign up</Link>
            </li>
          </>
        )}
      </Right>
    </NavBar>
  );
};
