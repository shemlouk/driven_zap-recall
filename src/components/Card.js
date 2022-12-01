import { useState } from "react";
import styled from "styled-components";
import setaVirar from "../assets/img/seta_virar.png";
import setaPlay from "../assets/img/seta_play.png";
import iconeCerto from "../assets/img/icone_certo.png";
import iconeQuase from "../assets/img/icone_quase.png";
import iconeErro from "../assets/img/icone_erro.png";

const info = [
  { id: 0, title: null, file: setaPlay, color: "#333333" },
  { id: 1, title: "Não lembrei", file: iconeErro, color: "#FF3030" },
  { id: 2, title: "Quase não lembrei", file: iconeQuase, color: "#FF922E" },
  { id: 3, title: "Zap!", file: iconeCerto, color: "#2FBE34" },
];

export default function Card({ id, question, answer }) {
  const [status, setStatus] = useState(0);
  const [score, setScore] = useState(0);

  function updateStatus() {
    setStatus(status + 1);
  }

  function updateScore(num) {
    setScore(num);
    updateStatus();
  }

  function selectText() {
    if (status % 3 === 0) return;
    if (status % 3 === 1) return question;
    return answer;
  }

  return (
    <StyledCard status={status}>
      {selectText()}
      <SetaVirar status={status} src={setaVirar} onClick={updateStatus} />
      <div>
        {info.slice(1).map((i) => (
          <Option key={i.id} onClick={() => updateScore(i.id)} color={i.color}>
            {i.title}
          </Option>
        ))}
      </div>
      <CardTitle {...{ status, score }}>Pergunta {id}</CardTitle>
      <Icons
        status={status}
        src={info[score].file}
        onClick={() => status === 0 && updateStatus()}
      />
    </StyledCard>
  );
}

const StyledCard = styled.li`
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

  img {
    cursor: pointer;
  }

  div {
    display: ${({ status }) => (status !== 2 ? "none" : "flex")};
    width: 100%;
    justify-content: space-around;
  }
`;

const CardTitle = styled.p`
  display: ${({ status }) => status % 3 !== 0 && "none"};
  font-family: "Recursive";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-decoration: ${({ score }) => score !== 0 && "line-through"};
  color: ${({ score }) => info[score].color};
`;

const SetaVirar = styled.img`
  display: ${({ status }) => status !== 1 && "none"};
  position: absolute;
  bottom: 10px;
  right: 10px;
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
