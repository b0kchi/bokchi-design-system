import styled from "styled-components";
import { createColorToken } from "../tokens/colors";
import baseColorToken from "../tokens/tokens.json";

interface IRadioProps {
  name: string;
  value: string;
  id: string;
  label?: string;
  onChange: () => void;
}

const colorChip = createColorToken();
const baseColorChip = baseColorToken;

export default function Radio(props: IRadioProps) {
  return (
    <>
      <input type="radio" id={props.id} />
      <label htmlFor={props.id}>test</label>
    </>
  );
}
