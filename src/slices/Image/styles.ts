import styled from "styled-components";

export const Container = styled.div`
  img {
    height: 400px;
    width: 500px;
  }

  @media only screen and (max-width: 550px) {
    img {
      height: 300px;
      width: 400px;
    }
  }

  @media only screen and (max-width: 450px) {
    img {
      height: 200px;
      width: 300px;
    }
  }

  @media only screen and (max-width: 350px) {
    img {
      height: 180px;
      width: 250px;
    }
  }
`;
