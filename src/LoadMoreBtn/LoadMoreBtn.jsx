import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { advertsOperations } from "../redux/operations";
import { LoadMoreBtn, LoaderContainer } from "./LoadMoreBtn.styled";
import { selectors } from "../redux/selectors";
import { Oval } from "react-loader-spinner";

const LoadMore = () => {
  const [page, setPage] = useState(1);
  const [endOfList, setEndOfList] = useState(false);

  const isLoading = useSelector(selectors.isLoading);

  const dispatch = useDispatch();
  const onLoadMore = () => {
    setPage((page) => page + 1);
  };

  useEffect(() => {
    dispatch(advertsOperations.fetchAdverts(page)).then((data) => {
      if (data.payload.length < 12) {
        setEndOfList(true);
      }
    });
  }, [page, dispatch]);

  return (
    <>
      {isLoading && (
        <LoaderContainer>
          <Oval
            height={80}
            width={80}
            color="#1882e4"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#1768b4"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </LoaderContainer>
      )}
      {!isLoading && !endOfList && (
        <LoadMoreBtn onClick={onLoadMore}>Load more</LoadMoreBtn>
      )}
    </>
  );
};

export default LoadMore;
