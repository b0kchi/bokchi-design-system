import styled from "styled-components";
import { createColorToken } from "../tokens/colors";
import baseColorToken from "../tokens/tokens.json";

type InputType = "checkbox" | "radio" | "date" | "file" | "text" | "password";

interface IInputProps {
  type: InputType;
  name?: string;
  value?: string;
  id?: string;
  checked?: boolean;
  minlength?: string;
  required?: boolean;
  onChange: () => void;
}

const StyledInput = styled.input<IInputProps>``;

export default function Input({
  type = "text",
  name,
  value,
  id,
  checked,
  minlength,
  required,
  onChange,
}: IInputProps) {
  return (
    <StyledInput
      type={type}
      name={name}
      value={value}
      id={id}
      onChange={onChange}
      checked={checked}
      minlength={minlength}
      required={required}
    />
  );
}
