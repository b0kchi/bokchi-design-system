import styled from "styled-components";
import { createColorToken } from "../tokens/colors";
import baseColorToken from "../tokens/tokens.json";

interface ICheckboxProps {
  name: string;
  value: string;
  id: string;
  label?: string;
  checked?: boolean;
}

const colorChip = createColorToken();
const baseColorChip = baseColorToken;
console.log("colorChip: ", colorChip);
console.log("baseColorChip: ", baseColorChip);

const StyledInput = styled.input<ICheckboxProps>``;
const StyledLabel = styled.label``;

export default function Checkbox({
  label,
  checked,
  id,
  name,
  value,
}: ICheckboxProps) {
  return (
    <>
      <StyledInput
        type="checkbox"
        id={id}
        defaultChecked={checked}
        name={name}
        value={value}
      />
      {label && <StyledLabel htmlFor={id}>{label}</StyledLabel>}
    </>
  );
}
