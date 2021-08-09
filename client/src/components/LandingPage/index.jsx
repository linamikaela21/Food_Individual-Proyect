import { Link } from "react-router-dom";
import style from './index.module.css'

export function LandingPage() {
    return (
    <div className={style.fondo}>
        <h1 className={style.title} >Bienvenidos al horno de las ideas</h1>
        <Link to='/recipes'>
        <button className={style.button}>WELCOME</button>
        </Link>
    </div>
    )
};

export default LandingPage;

