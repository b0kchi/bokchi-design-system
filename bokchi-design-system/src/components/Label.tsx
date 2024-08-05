interface IlabelProps {
    htmlFor: string;
    children: string;
}

export default function Label({htmlFor, children}: IlabelProps) {
    return <label htmlFor={htmlFor}>{children}</label>
}
