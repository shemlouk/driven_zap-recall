import styled from "styled-components";
import cards from "../cards";
import info from "../info.js";

export default function Footer({ finishedQuestions }) {
  const progress = finishedQuestions.length;

  return (
    <Container progress={progress}>
      <p>
        {progress}/{cards.length} CONCLUÍDOS
      </p>
      <div>
        {finishedQuestions.map((f) => (
          <img key={f.id} src={info[f.score].file} />
        ))}
      </div>
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

  div {
    display: ${({ progress }) => !progress && "none"};
  }

  img {
    margin: 0px 3px;
  }
`;
