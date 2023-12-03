import { useSelector } from "react-redux";
import { selectors } from "../redux/selectors";
import Card from "../Card";
import { CarsContainer } from "../Cards/Cards.styled";

const Favorites = () => {
  const favorites = useSelector(selectors.favorites);

  return (
    <>
      <CarsContainer>
        {favorites.map((fav) => {
          return <Card key={fav.id} car={fav} fav={true} />;
        })}
      </CarsContainer>
    </>
  );
};

export default Favorites;
