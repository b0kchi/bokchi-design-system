import styled from "styled-components";

interface IErrorMessageProps {
    children: string;
    color?: string;
    position?: string;
}

const Text = styled.p`
    font-size: 0.875rem;
    line-height: 1.25;
    letter-spacing: -0.004rem;
    color: ${props => props.color ? props.color : '#FF4D4F'};
    position: ${props => props.position == 'absolute' ? 'absolute' ? 'initial'}
`;

export default function ErrorMessage(props: IErrorMessageProps) {
    return <Text color={props.color} position={props.position}>{props.children}</Text>
}