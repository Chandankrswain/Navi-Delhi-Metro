import styled from "styled-components";

export const MainContainerDiv = styled.div`
  width: 400px;
  height: 670px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  margin: 200px 200px;

  @media screen and (max-width: 700px) {
    margin: 10px 10px;
    width: 350px;
    height: 400px;
  }
`;

export const Image = styled.img``;

export const UpperBox = styled.div`
  background-color: #666666;
  border-radius: 30px;
  width: 100%;
  height: 70%;
`;

export const LowerBox = styled.div`
  background-color: #666666;
  border-radius: 30px;
  width: 100%;
  height: 30%;
`;

export const LowerCircle = styled.div`\
    border-radius: 50%;
    background-color : #fbfcf8;
    z-index:6;
    width:110px;
    height:110px;
    margin-left:150px;
    margin-top:170px;
   
`;
