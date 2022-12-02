import { useState } from "react";
import styled from "styled-components";
import info from "../info.js";
import setaVirar from "../assets/img/seta_virar.png";

export default function Card({
  id,
  question,
  answer,
  finishedQuestions,
  setFinishedQuestions,
}) {
  const [status, setStatus] = useState(0);
  const [score, setScore] = useState(0);

  function updateStatus() {
    setStatus(status + 1);
  }

  function updateScore(num) {
    setScore(num);
    updateStatus();
    setFinishedQuestions([...finishedQuestions, { id: id, score: num }]);
  }

  function selectText() {
    if (status % 3 === 0) return `Pergunta ${id}`;
    if (status === 1) return question;
    return answer;
  }

  return (
    <StyledCard data-test="flashcard" status={status}>
      <CardText data-text="flashcard-text" {...{ status, score }}>
        {selectText()}
      </CardText>
      <SetaVirar
        data-test="turn-btn"
        status={status}
        src={setaVirar}
        onClick={updateStatus}
      />
      <div>
        {info.slice(1).map((i) => (
          <Option
            data-test={i.test + "-btn"}
            key={i.id}
            onClick={() => updateScore(i.id)}
            color={i.color}
          >
            {i.title}
          </Option>
        ))}
      </div>
      <Icons
        data-test={status === 0 ? info[score].test : info[score].test + "-icon"}
        status={status}
        src={info[score].file}
        onClick={() => status === 0 && updateStatus()}
      />
    </StyledCard>
  );
}

const StyledCard = styled.li`
  user-select: none;
  width: 300px;
  height: auto;
  background-color: ${({ status }) => (status % 3 > 0 ? "#ffffd5" : "#ffffff")};
  margin-bottom: 25px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: ${({ status }) => status % 3 === 0 && "center"};
  justify-content: space-between;
  min-height: ${({ status }) => (status % 3 !== 0 ? "100px" : "35px")};
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  flex-direction: ${({ status }) => status % 3 !== 0 && "column"};
  transition: 0.3s;

  :hover {
    transform: scale(1.05);
  }

  img {
    cursor: ${({ status }) => (status === 3 ? "help" : "pointer")};
  }

  div {
    display: ${({ status }) => (status === 2 ? "flex" : "none")};
    margin-top: 20px;
    width: 100%;
    justify-content: space-around;
  }
`;

const CardText = styled.p`
  font-family: "Recursive";
  font-weight: ${({ status }) => status % 3 === 0 && "700"};
  font-size: ${({ score }) => (score % 3 === 0 ? "16px" : "18px")};
  line-height: 19px;
  text-decoration: ${({ score }) => score !== 0 && "line-through"};
  color: ${({ score }) => info[score].color};
`;

const SetaVirar = styled.img`
  display: ${({ status }) => status !== 1 && "none"};
  position: absolute;
  bottom: 15px;
  right: 15px;
`;

const Icons = styled.img`
  display: ${({ status }) => status % 3 !== 0 && "none"};
`;

const Option = styled.button`
  width: 85px;
  height: 40px;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: ${({ color }) => color};
  font-family: "Recursive";
  font-size: 12px;
  padding: 0px 10px;
  cursor: pointer;
`;
