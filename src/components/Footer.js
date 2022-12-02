import styled from "styled-components";
import cards from "../cards";
import info from "../info.js";
import partyEmoji from "../assets/img/party.png";
import sadEmoji from "../assets/img/sad.png";

const messages = [
  {
    emoji: sadEmoji,
    title: "Putz...",
    message: "Ainda faltam alguns...\nMas não desanime!",
  },
  {
    emoji: partyEmoji,
    title: "Parabéns!",
    message: "Você não esqueceu de nenhum flashcard!",
  },
];

export default function Footer({ finishedQuestions }) {
  const progress = finishedQuestions.length;
  const isGameFinished = progress === cards.length;
  const index = finishedQuestions.every((f) => f.score > 1) ? 1 : 0;

  return (
    <Container>
      <Message isGameFinished={isGameFinished}>
        <div>
          <img src={messages[index].emoji} />
          <span>{messages[index].title}</span>
        </div>
        <p>{messages[index].message}</p>
      </Message>
      <p>
        {progress}/{cards.length} CONCLUÍDOS
      </p>
      <ScoresLine progress={progress}>
        {finishedQuestions.map((f) => (
          <img key={f.id} src={info[f.score].file} />
        ))}
      </ScoresLine>
    </Container>
  );
}

const Container = styled.footer`
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
  width: 100%;
  min-height: 70px;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-family: "Recursive";
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px 0px;

  img {
    margin: 0px 3px;
  }
`;

const Message = styled.div`
  display: ${({ isGameFinished }) => (isGameFinished ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 15px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
  }

  img {
    width: 23px;
    margin-right: 13px;
    margin-left: 0px;
  }

  span {
    font-weight: 700;
  }

  p {
    width: 222px;
    text-align: center;
  }
`;

const ScoresLine = styled.div`
  display: ${({ progress }) => !progress && "none"};
  margin-top: 10px;
`;
