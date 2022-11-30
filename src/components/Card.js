import ClosedCard from "./ClosedCard";
import OpenedCard from "./OpenedCard";

const cardStates = [ClosedCard, OpenedCard, OpenedCard, ClosedCard];

export default function Card(props) {
  return <>{cardStates[props.status](props)}</>;
}
