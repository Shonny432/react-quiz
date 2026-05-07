import cls from "./Button.module.css";

let isActive = true;

export const Button = ({onClick, isActive, children, isDisabled}) => {
    return (
    <button className={`${cls.btn} ${isActive ? cls.active : ""}`} onClick={onClick} disabled={isDisabled}>{children}</button>
    );
}