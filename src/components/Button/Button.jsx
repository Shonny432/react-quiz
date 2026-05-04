import cls from "./Button.module.css";

let isActive = true;

export const Button = ({onClick, isActive, children, isDisabled}) => {
    return (
    <button className={isActive ? cls.active : cls.btn} onClick={onClick} disabled={isDisabled}>{children}</button>
    );
}