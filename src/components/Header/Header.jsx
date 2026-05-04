import { Button } from '../Button';
import cls from './Header.module.css';
import ReactLogo from '../../assets/react.svg'

export const Header = () => {
  return (
    <header className={cls.header}>
        <img src={ReactLogo} alt="react" />
        <span>React Quiz</span>
        <div className={cls.headerButtons}>
            <Button>Add</Button>
            <Button>Login</Button>
        </div>
    </header>
  );
};
