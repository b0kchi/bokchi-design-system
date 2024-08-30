import styled, { css } from "styled-components";

interface IErrorMessageProps {
    children: string;
    color?: string;
    position?: any;
}

const Text = styled.p<{color?: any, position?: any}>`
    margin: 0;
    font-size: 0.875rem;
    line-height: 1.25;
    letter-spacing: -0.004rem;
    color: ${props => props.color ? props.color : '#FF4D4F'};
    ${(props) => props.position == 'bottom' && css`
        position: absolute;
        bottom: 0px;
    `};
`;

export default function ErrorMessage(props: IErrorMessageProps) {
    return <Text color={props.color} position='bottom'>{props.children}</Text>
}