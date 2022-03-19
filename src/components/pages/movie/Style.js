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
    height: 0.3rem;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .bold {
    font-weight: bolder;
  }
`;

export const Wrapper = styled.div`
  diaplay: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: white;
  height: auto;
  background-color: #262624;
`;
