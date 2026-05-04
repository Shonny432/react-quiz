import cls from "./Button.module.css";

let isPrimary = true;
// const {onClick, children} = props;

export const Button = (props) => {
    console.log(props)
    return (<button className={isPrimary ? cls.primary : cls.btn} onClick={props.onClick}>{props.children}</button>)
}