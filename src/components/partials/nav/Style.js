import styled from "styled-components";

export const NavBar = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  background-color: black;
  height: 5rem;
  position: fixed;
  top: 0;
  justify-content: space-between;

  a {
    color: white;
    text-decoration: none;
  }

  a:active {
    color: yellow;
  }
`;

export const Right = styled.div`
  display: flex;
  padding-right: 1.5rem;
`;
