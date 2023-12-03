const IconButton = ({ onClick, children, ...allyProps }) => {
  return (
    <>
      <button type="button" onClick={onClick} {...allyProps}>
        {children}
      </button>
    </>
  );
};

export default IconButton;
