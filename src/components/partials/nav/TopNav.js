import { NavBar, Right } from "./Style";
export const TopNav = () => {
  return (
    <NavBar>
      <li>
        <a href="default.asp">Movie App</a>
      </li>
      <Right>
        <li>
          <a href="news.asp">My movies</a>
        </li>
        <li>
          <a href="news.asp">Logout</a>
        </li>
        <li>
          <a href="news.asp">Login</a>
        </li>
      </Right>
    </NavBar>
  );
};
