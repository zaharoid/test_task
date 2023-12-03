import styled from "@emotion/styled";

export const LoadMoreBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 30px;

  color: #fff;
  background-color: var(--primary-blue);
  border: none;
  border-radius: 10px;
  cursor: pointer;

  padding: 10px 30px;
  margin: 40px auto 0;

  transition: all var(--animation);

  &:hover {
    background: var(--primary-blue);
    box-shadow: 0 10px 15px rgba(27, 27, 28, 0.4);
    color: #fff;
    cursor: pointer;
  }
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 20px;
`;
