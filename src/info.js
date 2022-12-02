import setaPlay from "./assets/img/seta_play.png";
import iconeCerto from "./assets/img/icone_certo.png";
import iconeQuase from "./assets/img/icone_quase.png";
import iconeErro from "./assets/img/icone_erro.png";

const info = [
  { id: 0, title: null, file: setaPlay, color: "#333333", test: "play-btn" },
  {
    id: 1,
    title: "Não lembrei",
    file: iconeErro,
    color: "#FF3030",
    test: "no",
  },
  {
    id: 2,
    title: "Quase não lembrei",
    file: iconeQuase,
    color: "#FF922E",
    test: "partial",
  },
  { id: 3, title: "Zap!", file: iconeCerto, color: "#2FBE34", test: "zap" },
];

export default info;
