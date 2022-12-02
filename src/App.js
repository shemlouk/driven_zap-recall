import { useState } from "react";
import MainPage from "./components/MainPage";
import StartPage from "./components/StartPage";

export default function App() {
  const [gameStatus, setGameStatus] = useState(false);
  return (
    <>{gameStatus ? <MainPage /> : <StartPage {...{ setGameStatus }} />}</>
  );
}
