import styled from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Game from "./components/Game";

export default function App() {
  return (
    <Container>
      <Header></Header>
      <Game></Game>
      <Footer></Footer>
    </Container>
  );
}

const Container = styled.div`
  background-color: #fb6b6b;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`;
