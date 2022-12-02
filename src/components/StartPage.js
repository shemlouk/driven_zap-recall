import styled from "styled-components";
import logo from "../assets/img/logo.png";

export default function StartPage({ setGameStatus }) {
  return (
    <Container>
      <img src={logo} />
      <h1>ZapRecall</h1>
      <button onClick={() => setGameStatus(true)}>Iniciar Recall!</button>
    </Container>
  );
}

const Container = styled.div`
  background-color: #fb6b6b;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0px;
  padding: 0px;
  user-select: none;

  img {
    width: 136px;
    margin-bottom: 35px;
  }

  h1 {
    font-family: "Righteous";
    font-size: 36px;
    color: #ffffff;
    margin-bottom: 40px;
  }

  button {
    width: 246px;
    height: 54px;
    background-color: white;
    border: 1px solid #d70900;
    border-radius: 5px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    font-family: "Recursive";
    font-size: 18px;
    color: #d70900;
    cursor: pointer;
    transition: transform 0.3s;

    :active {
      transform: scale(0.95);
    }
  }
`;
