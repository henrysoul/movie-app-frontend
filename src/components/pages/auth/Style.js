import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  

  input {
    width: 350px;
    height: 50px;
    margin: 0 20px 20px 0;
  }

  .rows {
    display: block;
  }

  .cols {
    display: inline-block;
  }
`;

export const Button = styled.button`
  height: auto;
  padding: 1rem;
  background-color: yellow;
  color: black;
  display: block;
`;

export const Label = styled.span`
  display: block;
`;
