import styled from "styled-components";
import logo from "../assets/img/logo.png";

export default function Header() {
  return (
    <Container>
      <a href=".">
        <img src={logo} />
        <h1>ZapRecall</h1>
      </a>
    </Container>
  );
}

const Container = styled.header`
  margin: 40px 0 50px 0;

  img {
    width: 52px;
  }

  a {
    user-select: none;
    text-decoration: none;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  h1 {
    font-family: "Righteous";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    color: #ffffff;
    margin-left: 20px;
  }
`;
