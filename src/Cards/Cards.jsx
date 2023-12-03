import { CarsContainer, FilterTitle } from "./Cards.styled";
import Card from "../Card";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectors } from "../redux/selectors";
import Dropdown from "../Dropdown";
import { filterByBrand } from "../helpers";
import { FilterContainer } from "../Dropdown/Dropdown.styled";
import LoadMore from "../LoadMoreBtn/LoadMoreBtn";
import { advertsOperations } from "../redux/operations";

const Cards = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const adverts = useSelector(selectors.adverts);

  const favorites = useSelector(selectors.favorites);

  const dispatch = useDispatch();

  const options = [];

  adverts &&
    adverts.forEach(({ make }) => {
      if (options.find((option) => option.value === make)) {
        return;
      }

      const option = { label: make, value: make };
      options.push(option);
    });

  const filteredAdverts = filterByBrand(adverts, selectedOption?.value);

  useEffect(() => {
    dispatch(advertsOperations.fetchAdverts());
  }, [dispatch]);

  return (
    <>
      <FilterContainer>
        <FilterTitle>Car brand</FilterTitle>
        <Dropdown
          onChange={setSelectedOption}
          options={options}
          selectOption={selectedOption}
        />
      </FilterContainer>
      <CarsContainer>
        {filteredAdverts &&
          filteredAdverts.map((advert) => {
            if (favorites.find((fav) => fav.id === advert.id)) {
              return <Card key={advert.id} car={advert} fav={true} />;
            }
            return <Card key={advert.id} car={advert} fav={false} />;
          })}
      </CarsContainer>
      <LoadMore />
    </>
  );
};

export default Cards;
