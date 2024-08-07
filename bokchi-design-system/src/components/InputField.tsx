import IconButton from "./IconButton";
import ErrorMessage from "./ErrorMessage";

interface IInputFieldProps {
    iconPath: string;
    iconAlt: string;
    onIconClick: () => void;
    placeholder: string;
    onChange: () => void;
    value: string;
    errorMessage: string;
    isError: boolean;
}

export default function InputField(props: IInputFieldProps) {
    return <div>
        <input type="text" placeholder={props.placeholder} value={props.value} onChange={props.onChange}/>
        {props.value && <IconButton onClick={props.onIconClick} iconAlt={props.iconAlt} iconPath={props.iconPath}/>}
        {props.isError && <ErrorMessage>{props.errorMessage}</ErrorMessage>}
    </div>;
}