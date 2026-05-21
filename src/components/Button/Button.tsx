import type { FC, MouseEvent, ReactNode } from "react";
import cls from "./Button.module.css";

export interface IButtonProps {
    isActive?: boolean;
    children: ReactNode;
    isDisabled?: boolean;
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

// let isActive = true;

export const Button: FC<IButtonProps> = ({onClick, isActive, children, isDisabled = false}) => {
    return (
    <button className={`${cls.btn} ${isActive ? cls.active : ""}`} onClick={onClick} disabled={isDisabled}>{children}</button>
    );
}