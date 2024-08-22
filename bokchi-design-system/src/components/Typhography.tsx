import styled, { css } from "styled-components";
import tokens from '../tokens/tokens.json';
import {createPrimaryColorToken}  from "../tokens/colors";

type TextType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type TextState = "default" | "primary" | "secondary" | "success" | "warning" | "danger" | "disabled";

interface ITyphographyProps {
    type?: TextType;
    children: string;
    state?: TextState;
}

const seedPrimary = tokens.core.colors.seed.primary.$value;
const seedPrimaryArray = seedPrimary.slice(4, seedPrimary.length - 1).split(',');

let primaryColorChip = createPrimaryColorToken({red: parseInt(seedPrimaryArray[0]), green: parseInt(seedPrimaryArray[1]), blue: parseInt(seedPrimaryArray[2])});
console.log('primaryColorChip: ', primaryColorChip);

const Heading1 = styled.h1<ITyphographyProps>`
    font-weight:600;
    font-size: 1.25rem;
    ${(props) => (
        props.state == 'primary' && css`
        color: ${primaryColorChip.colorPrimary}
        `
    )};
`;
//color: ${colors.orange[400].value}

export default function Typhograpy(props: ITyphographyProps) {
    if (props.type == 'h1') {
        return (
            <Heading1 state={props.state}>{props.children}</Heading1>
        )
    } else if (props.type == 'h2') {
        return (
            <h2>{props.children}</h2>
        )
    } else if (props.type == 'h3') {
        return (
            <h3>{props.children}</h3>
        )
    } else if (props.type == 'h4') {
        return (
            <h4>{props.children}</h4>
        )
    } else if (props.type == 'h5') {
        return (
            <h5>{props.children}</h5>
        )
    }
    
    else {
        return (
            <div>{props.children}</div>
        )
    }
}