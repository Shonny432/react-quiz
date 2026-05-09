import { Button } from '../Button';
import cls from './Header.module.css';
import ReactLogo from '../../assets/react.svg'
import { useNavigate } from 'react-router-dom';

export const Header = () => {
    const navigate = useNavigate();
    return (
        <header className={cls.header}>
            <img src={ReactLogo} alt="react" onClick={() => navigate("/")} />
            <p>React Quiz</p>
            <div className={cls.headerButtons}>
                <Button onClick={() => navigate("/addquestion")}>Add</Button>
                <Button>Login</Button>
            </div>
        </header>
    );
};
