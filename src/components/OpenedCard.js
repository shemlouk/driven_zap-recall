import styled from "styled-components";
import setaVirar from "../assets/img/seta_virar.png";

const buttons = [
  { title: "Não lembrei", color: "#FF3030" },
  { title: "Quase não lembrei", color: "#FF922E" },
  { title: "Zap!", color: "#2FBE34" },
];

export default function OpenedCard({ question, answer, status }) {
  return (
    <Container>
      <p>{status === 1 ? question : answer}</p>
      <StyledImage status={status} src={setaVirar} />
      <ButtonsContainer status={status}>
        {buttons.map((b) => (
          <StyledButton background={b.color}>{b.title}</StyledButton>
        ))}
      </ButtonsContainer>
    </Container>
  );
}

const Container = styled.li`
  width: 300px;
  margin-bottom: 25px;
  padding: 15px 20px;
  min-height: 100px;
  background: #ffffd5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ButtonsContainer = styled.div`
  visibility: ${({ status }) => (status == 2 ? "visible" : "hidden")};
  display: flex;
  justify-content: space-between;
`;

const StyledImage = styled.img`
  visibility: ${({ status }) => (status == 1 ? "visible" : "hidden")};
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

const StyledButton = styled.button`
  padding: 0px 10px;
  width: 90px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Recursive";
  font-size: 12px;
  color: white;
  border: none;
  border-radius: 5px;
  background-color: ${({ background }) => background};
`;
