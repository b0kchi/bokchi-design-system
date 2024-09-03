import { useState } from "react";
import styled from "styled-components";

interface ICheckboxItem {
  name: string;
  value: string;
  id: string;
  label: string;
}

interface ICheckboxProps {
  items: Array<ICheckboxItem>;
  handleAll?: boolean;
}

const StyledInput = styled.input``;
const StyledLabel = styled.label``;

const Checkbox = ({ items, handleAll }: ICheckboxProps) => {
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

  const handleAllCheck = (checked: boolean) => {
    if (checked) {
      const idArray: Array<string> = [];
      items.forEach((elem) => idArray.push(elem.id));
      setCheckedList(idArray);
    } else {
      setCheckedList([]);
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
      {handleAll && (
        <div className="checkbox">
          <StyledInput
            type="checkbox"
            id="select-all"
            checked={checkedList.length === items.length}
            onChange={(e) => handleAllCheck(e.target.checked)}
          />
          <StyledLabel htmlFor="select-all">전체선택</StyledLabel>
        </div>
      )}
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
