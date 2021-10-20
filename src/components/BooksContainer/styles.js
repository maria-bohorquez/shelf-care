import styled from "styled-components";

export const Container = styled.div`
  background-color: #a7bbec;
  padding: 160px 40px;
  overflow: scroll;

  @media (max-width: 800px) {
    padding: 114px 20px;
  }
`;

export const H2 = styled.h2`
    font-size: 42px;
    margin: 0 0 10px 0;

    @media (max-width: 800px) {
        font-size: 32px;
    }
`
