import cards from "../cards.js";
import Card from "./Card";

export default function Game() {
  return (
    <ul>
      {cards.map((c) => (
        <Card key={c.id} {...c}></Card>
      ))}
    </ul>
  );
}
