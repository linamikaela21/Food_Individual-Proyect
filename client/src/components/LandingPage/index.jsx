import { Link } from "react-router-dom";
import style from './index.module.css'

export function LandingPage() {
    return (
    <div className={style.fondo}>
        <div className={style.content}>
        <h1 className={style.title}>BIENVENIDO AL HORNO DE LAS IDEAS</h1>
        <Link to='/recipes'>
        <button className={style.button}>WELCOME</button>
        </Link>
        </div>
    </div>
    )
};

export default LandingPage;

