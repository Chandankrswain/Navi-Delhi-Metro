import styled from "styled-components";

export const BodyText = styled.p`
  color: #e9ecef;
  position: absolute;
  font-size: 15rem;
  text-align: center;
  z-index: -3;
  padding: 0;
  font-weight: 800;
  margin: 0px;
  font-family: "Montserrat", sans-serif;

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const NavigateDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30vh;
  width: 100%;
  z-index: -3;
  position: absolute;
`;
