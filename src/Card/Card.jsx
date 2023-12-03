import {
  CardWrapper,
  ImageThumb,
  Image,
  CarTitle,
  ModelTitle,
  CarCost,
  CarTags,
  TitleWrapper,
  CardButton,
  IconButton,
  TagItem,
  Heart,
  heartStyles,
} from "./Card.styled";
import {
  addFavoriteCar,
  removeFavoriteCar,
} from "../redux/slices/favoritesSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectors } from "../redux/selectors";
import Modal from "../Modal/Modal";
import { CloseIcon } from "../Modal/Modal.styled";
import { CloseModalBtn } from "../Modal/Modal.styled";
import ModalCar from "../ModalCar";

const Card = ({ car, fav }) => {
  const [favorite, setFavorite] = useState(fav);
  const [showModal, setShowModal] = useState(false);
  const {
    img,
    make,
    model,
    year,
    rentalPrice,
    rentalCompany,
    engineSize,
    address,
  } = car;

  const favorites = useSelector(selectors.favorites);
  const dispatch = useDispatch();

  const onCloseModal = () => {
    setShowModal(false);
  };

  const onHeartClick = () => {
    setFavorite(!favorite);

    if (!favorite && !favorites.find(({ id }) => car.id === id)) {
      dispatch(addFavoriteCar(car));
    }

    if (favorite) {
      dispatch(removeFavoriteCar(car));
    }
  };

  return (
    <>
      <CardWrapper>
        <ImageThumb>
          <IconButton onClick={onHeartClick}>
            {favorite ? (
              <Heart stroke={heartStyles.stroke} fill={heartStyles.fill} />
            ) : (
              <Heart
                stroke={heartStyles.unlikedStroke}
                fill={heartStyles.unlikedFill}
              />
            )}
          </IconButton>
          <Image src={img} alt="car" />
        </ImageThumb>

        <TitleWrapper>
          <CarTitle>
            {make}
            <ModelTitle> {model},</ModelTitle>
            <span> {year}</span>
          </CarTitle>
          <CarCost>{rentalPrice}</CarCost>
        </TitleWrapper>

        <CarTags>
          <TagItem>{rentalCompany}</TagItem>
          <TagItem>{engineSize}</TagItem>
          <TagItem>{address}</TagItem>
        </CarTags>
        <CardButton type="button" onClick={() => setShowModal(true)}>
          Learn more
        </CardButton>
      </CardWrapper>
      {showModal && (
        <Modal onClose={onCloseModal}>
          <CloseModalBtn onClick={onCloseModal}>
            <CloseIcon />
          </CloseModalBtn>
          <ModalCar {...car} />
        </Modal>
      )}
    </>
  );
};

export default Card;
