import styled from "@emotion/styled";
import IconBtn from "../IconButton";
import { ReactComponent as H } from "../assets/heart.svg";

export const Heart = styled(H)`
  transition: all var(--animation);
`;

export const heartStyles = {
  stroke: "none",
  fill: "red",
  unlikedStroke: "rgba(255, 255, 255, 0.8",
  unlikedFill: "transparent",
};

export const CardWrapper = styled.li`
  position: relative;
  display: block;
  width: 274px;
  height: 426px;

  margin: 25px 14.5px;

  transition: 0.3s;

  &:hover {
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
    border-radius: 7px;
  }
`;

export const ImageThumb = styled.div`
  width: 274px;
  height: 268px;
  margin-bottom: 14px;
`;
export const Image = styled.img`
  border-radius: 14px;

  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CarTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  width: 230px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  margin-bottom: 8px;

  color: var(--primary-text-color);
`;

export const ModelTitle = styled.span`
  color: var(--primary-blue);
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const CarCost = styled.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: var(--primary-text-color);
`;

export const CarTags = styled.div`
  gap: 4px 12px;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: rgba(18, 20, 23, 0.5);

  margin-bottom: 28px;

  & :last-child {
    border: none;
  }

  & :first-of-type {
    padding-left: 0;
  }
`;

export const CardButton = styled.button`
  text-decoration: none;
  display: flex;

  width: 100%;
  height: 44px;
  border: none;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  letter-spacing: 3px;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  padding: 12px, 99px;
  color: #524f4e;
  background: #b1e4f6;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  transition: 0.3s;

  &:hover,
  :focus {
    background: var(--primary-blue);
    border: none;
    box-shadow: 0 10px 15px rgba(120, 164, 231, 0.4);
    color: #fff;
    transform: translateY(-1px);
    cursor: pointer;
  }
`;

export const IconButton = styled(IconBtn)`
  position: absolute;
  top: 14px;
  right: 14px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const TagItem = styled.span`
  padding: 0 10px;
  border-right: 1px rgba(18, 20, 23, 0.1) solid;
`;
