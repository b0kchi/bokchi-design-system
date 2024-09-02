import styled from "styled-components";
import { createColorToken } from "../tokens/colors";
import baseColorToken from "../tokens/tokens.json";
import { useState } from "react";

interface ICheckboxProps {
  name: string;
  value: string;
  id: string;
  label?: string;
  onChange?: () => void;
}

const colorChip = createColorToken();
const baseColorChip = baseColorToken;

const StyledInputBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const StyledInput = styled.input`
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 5px;
  border: 2px solid rgb(194, 219, 255);
  margin: 0;

  &[data-checked="true"] {
    background-color: ${colorChip.colorPrimary};
  }
`;
const StyledLabel = styled.label``;

export default function Checkbox(props: ICheckboxProps) {
  const [check, setCheck] = useState<boolean>(true);

  return (
    <StyledInputBox>
      <StyledInput
        type="checkbox"
        id={props.id}
        name={props.name}
        value={props.value}
        onClick={() => setCheck(!check)}
        data-checked={check}
        onChange={() => props.onChange?.()}
      />
      {props.label && (
        <StyledLabel htmlFor={props.id}>{props.label}</StyledLabel>
      )}
    </StyledInputBox>
  );
}
