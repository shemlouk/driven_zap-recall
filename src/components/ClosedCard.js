import styled from "styled-components";
import setaPlay from "../assets/img/seta_play.png";
import iconeCerto from "../assets/img/icone_certo.png";
import iconeErro from "../assets/img/icone_erro.png";
import iconeQuase from "../assets/img/icone_quase.png";

const icons = [setaPlay, iconeCerto, iconeErro, iconeQuase];
const colors = ["#333333", "#2FBE34", "#FF3030", "#FF922E"];

export default function ClosedCard({ id, score }) {
  return (
    <Container>
      <StyledP score={score}>Pergunta {id}</StyledP>
      <img src={icons[score]} />
    </Container>
  );
}

const Container = styled.li`
  width: 300px;
  height: 35px;
  background-color: #ffffff;
  margin-bottom: 25px;
  padding: 15px 20px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledP = styled.p`
  font-family: "Recursive";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: ${({ score }) => colors[score]};
  text-decoration-line: ${({ score }) => (!score ? "" : "line-through")};
`;
