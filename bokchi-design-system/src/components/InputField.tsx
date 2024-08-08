import IconButton from "./IconButton";
import ErrorMessage from "./ErrorMessage";
import styles from '../styles/InputField.module.scss';

interface IInputFieldProps {
    iconPath: any;
    iconAlt: string;
    onIconClick: () => void;
    placeholder: string;
    onChange: () => void;
    value: string;
    errorMessage: string;
    isError: boolean;
    id: string;
}

export default function InputField(props: IInputFieldProps) {
    return <div className={styles._container}>
        <input type="text" id={props.id} placeholder={props.placeholder} value={props.value} onChange={props.onChange}/>
        {props.value && <IconButton onClick={props.onIconClick} iconAlt={props.iconAlt} iconPath={props.iconPath}/>}
        <span className={styles._errorMessage}>{props.isError && <ErrorMessage>{props.errorMessage}</ErrorMessage>}</span>
    </div>;
}