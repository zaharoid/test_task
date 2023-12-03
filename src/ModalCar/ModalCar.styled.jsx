import styled from "@emotion/styled";

export const CarContainer = styled.div``;

export const Img = styled.img`
  border-radius: 14px;

  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ImgContainer = styled.div`
  height: 248px;

  margin-top: 10px;
  margin-bottom: 14px;
`;

export const CarModalTags = styled.div`
  width: 277px;
  gap: 4px 12px;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: rgba(18, 20, 23, 0.5);

  margin-bottom: 14px;

  & :last-child {
    border: none;
  }

  & :first-of-type {
    padding-left: 0;
  }
`;

export const CarModalAccessories = styled.div`
  gap: 4px 12px;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: rgba(18, 20, 23, 0.5);

  margin-bottom: 14px;

  & :last-child {
    border: none;
  }

  & :first-of-type {
    padding-left: 0;
  }
`;

export const ModalCarDescription = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  margin-bottom: 24px;
`;

export const AccessoriesTitle = styled.h3`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;

  margin-bottom: 8px;
`;

export const CardModalButton = styled.a`
  text-decoration: none;
  display: flex;
  width: 168px;
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
  margin-top: 24px;
  color: white;
  background: #003cff;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  transition: 0.3s;

  &:hover {
    background: var(--primary-blue);
    box-shadow: 0 10px 15px rgba(27, 27, 28, 0.4);
    color: #fff;
    cursor: pointer;
  }
`;

export const RentalConditions = styled.span`
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;

  padding: 7px 14px;
  background-color: #f9f9f9;
  border-radius: 35px;
`;

export const ConditionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const ValueOfTag = styled.span`
  color: #3470ff;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
`;
