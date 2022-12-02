import cards from "../cards.js";
import Card from "./Card.js";

export default function Game(props) {
  return (
    <ul>
      {cards.map((c) => (
        <Card key={c.id} {...{ ...c, ...props }} />
      ))}
    </ul>
  );
}
