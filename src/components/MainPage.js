import { useState } from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Game from "./Game";
import Header from "./Header";

export default function MainPage() {
  const [finishedQuestions, setFinishedQuestions] = useState([]);
  return (
    <Container>
      <Header />
      <Game {...{ finishedQuestions, setFinishedQuestions }} />
      <Footer level={finishedQuestions.length} />
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
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`;
