import { useState } from "react";

import Dropdown from "../Dropdown";

const options = [
  { value: "Honda", label: "Honda" },
  { value: "BMW", label: "BMW" },
  { value: "Lada", label: "Lada" },
  { value: "Audi", label: "Audi" },
  { value: "Porsche", label: "Porsche" },
  { value: "Honda", label: "Honda" },
  { value: "BMW", label: "BMW" },
  { value: "Lada", label: "Lada" },
  { value: "Audi", label: "Audi" },
  { value: "Porsche", label: "Porsche" },
  { value: "Honda", label: "Honda" },
  { value: "BMW", label: "BMW" },
  { value: "Lada", label: "Lada" },
  { value: "Audi", label: "Audi" },
  { value: "Porsche", label: "Porsche" },
];

const CostDropdown = () => {
  const [selectOption, setSelectOption] = useState(null);

  const onChange = (selectOption) => {
    setSelectOption(selectOption);
  };

  return (
    <>
      <Dropdown
        options={options}
        onChange={onChange}
        selectOption={selectOption}
      />
    </>
  );
};

export default CostDropdown;
