import Select from "react-select";
import { useState } from "react";
import { DropdownContainer } from "./Dropdown.styled";

const Dropdown = ({ options, selectOption, onChange }) => {
  const [open, setOpen] = useState(false);

  const selectStyles = (open) => ({
    singleValue: (provided) => ({
      ...provided,
      color: "var(--primary-text-color)",
      background: "transparent",
    }),

    control: (provided) => ({
      ...provided,
      borderColor: "transparent",
      borderRadius: 14,
    }),
    input: (provided) => ({
      ...provided,
      color: "blue",
      background: "transparent",
      borderColor: "transparent",
    }),

    menu: (provided) => ({
      ...provided,
      color: "rgba(18, 20, 23, 0.2)",
      overflow: "hidden",
      cursor: "pointer",
      opacity: open ? 1 : 0,
      transition: "all 300ms ease-in-out",
      visibility: open ? "visible" : "hidden",
    }),
    dropdownIndicator: (base) => ({
      ...base,
      transform: open ? "rotate(-180deg)" : "rotate(0deg)",
      transition: "250ms",
    }),
    menuList: (base) => ({
      ...base,
      height: "200px",

      cursor: "pointer",
      color: "rgba(18, 20, 23, 0.2)",
      background: "transparent",

      "::-webkit-scrollbar": {
        width: "8px",
      },
      "::-webkit-scrollbar-thumb": {
        background: "rgba(18, 20, 23, .15)",
        borderRadius: "10px",
        transition: "250ms",
      },
      "::-webkit-scrollbar-thumb:hover": {
        background: "rgba(64, 69, 74, 0.1)",
      },
    }),
  });

  return (
    <DropdownContainer onClick={() => setOpen(!open)}>
      <Select
        value={selectOption}
        onChange={onChange}
        options={options}
        placeholder={"Enter the text"}
        isSearchable={false}
        onBlur={() => setOpen(false)}
        menuIsOpen
        styles={selectStyles(open)}
        isClearable
      />
    </DropdownContainer>
  );
};

export default Dropdown;
