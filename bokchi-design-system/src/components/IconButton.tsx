import styled from "styled-components";

interface IIconButtonProps {
    iconPath: string;
    iconAlt: string;
    onClick: () => void;
}

const Button = styled.button``;

export default function IconButton(props: IIconButtonProps) {
    return <Button onClick={props.onClick}><img src={props.iconPath} alt={props.iconAlt}/></Button>
}