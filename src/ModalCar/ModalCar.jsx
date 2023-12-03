import {
  ImgContainer,
  Img,
  CarModalTags,
  ModalCarDescription,
  AccessoriesTitle,
  CarModalAccessories,
  CardModalButton,
  RentalConditions,
  ConditionsContainer,
  ValueOfTag,
} from "./ModalCar.styled";
import { TagItem, CarTitle, ModelTitle } from "../Card/Card.styled";

const ModalCard = ({
  img,
  make,
  model,
  year,
  accessories,
  functionalities,
  address,
  id,
  type,
  fuelConsumption,
  engineSize,
  description,
  rentalConditions,
  mileage,
  rentalPrice,
}) => {
  return (
    <>
      <ImgContainer>
        <Img src={img} alt="car" />
      </ImgContainer>
      <CarTitle>
        {make}
        <ModelTitle> {model},</ModelTitle>
        <span> {year}</span>
      </CarTitle>
      <CarModalTags>
        <TagItem>{address}</TagItem>
        <TagItem>id: {id}</TagItem>
        <TagItem>year: {year}</TagItem>
        <TagItem>type: {type}</TagItem>
        <TagItem>Fuel Consumption: {fuelConsumption}</TagItem>
        <TagItem>engineSize: {engineSize}</TagItem>
      </CarModalTags>
      <ModalCarDescription>{description}</ModalCarDescription>
      <AccessoriesTitle>Accessories and functionalities:</AccessoriesTitle>
      <CarModalAccessories>
        {accessories.map((item) => {
          return <TagItem key={item}>{item}</TagItem>;
        })}

        {functionalities.map((item) => {
          return <TagItem key={item}>{item}</TagItem>;
        })}
      </CarModalAccessories>
      <ConditionsContainer>
        <RentalConditions>{rentalConditions}</RentalConditions>
        <RentalConditions>
          Mileage:{" "}
          <ValueOfTag>
            {new Intl.NumberFormat("en-US").format(mileage)}
          </ValueOfTag>
        </RentalConditions>
        <RentalConditions>
          Price: <ValueOfTag>{rentalPrice}</ValueOfTag>
        </RentalConditions>
      </ConditionsContainer>
      <CardModalButton href="tel:+110001111111">Rental Car</CardModalButton>
    </>
  );
};

export default ModalCard;
