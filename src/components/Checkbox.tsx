import { useState } from "react";
import styled from "styled-components";

interface ICheckboxItem {
  name: string;
  value: string;
  id: string;
  label: string;
}

const StyledInput = styled.input``;
const StyledLabel = styled.label``;

const Checkbox = ({ items }: any) => {
  const [checkedList, setCheckedList] = useState<string[]>([]);

  const checkedItemHandler = async (value: string, isChecked: boolean) => {
    if (isChecked) {
      setCheckedList((prev) => [...prev, value]);
      return;
    }

    if (!isChecked && checkedList.includes(value)) {
      setCheckedList(checkedList.filter((item) => item !== value));
      return;
    }
  };

  const checkHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    checkedItemHandler(value, e.target.checked);
  };

  return (
    <>
      {items.map((item: ICheckboxItem, idx: number) => (
        <div className="checkbox" key={idx}>
          <StyledInput
            type="checkbox"
            id={item.id}
            checked={checkedList.includes(item.id)}
            onChange={(e) => checkHandler(e, item.id)}
          />
          <StyledLabel htmlFor={item.id}>{item.label}</StyledLabel>
        </div>
      ))}
    </>
  );
};

export default Checkbox;
