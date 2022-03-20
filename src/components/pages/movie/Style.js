import styled from "styled-components";

export const Card = styled.div`
  width: 24.8%;
  display: inline-block;
  margin: 1px;
  position: relative;

  @media (max-width: 992px) {
    width: 49.6%;
  }

  @media (max-width: 500px) {
    width: 100%;
  }

  .container {
    width: 70%;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1rem;
    background-color: rgba(65, 64, 64, 0.2);
  }

  .bold {
    font-weight: bolder;
  }

  .fave {
    position: absolute;
    width: 100%;
    bottom: 0;
    text-align: center;
    background-color: #000000cf;
    cursor: pointer;
  }
`;

export const Wrapper = styled.div`
  diaplay: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: white;
  height: auto;
  background-color: #262624;
  text-align: center;
  
  h4 {
    color:white
  }
`;
