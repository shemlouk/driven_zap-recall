import styled from "styled-components";

export default function Footer() {
  return (
    <Container>
      <p>0/8 CONCLUÍDOS</p>
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
  justify-content: center;
  font-family: "Recursive";
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px;
`;
