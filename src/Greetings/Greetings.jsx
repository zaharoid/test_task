import {
  GreetingsContainer,
  GreetingsTitle,
  GreetingsText,
  GreetingsEnd,
} from "./Greetings.styled";

export default function Greetings() {
  return (
    <GreetingsContainer>
      <GreetingsTitle>Car rental</GreetingsTitle>
      <GreetingsText>
        A platform where you can rent cars of different classes at affordable
        prices without any problems.
      </GreetingsText>
      <GreetingsEnd>
        You can call us when choosing a car by clicking on the Rental car
        button.
      </GreetingsEnd>
    </GreetingsContainer>
  );
}
