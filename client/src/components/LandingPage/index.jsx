import { Link } from "react-router-dom";
import style from './index.moduless.css'

export function LandingPage() {
    return (
    <div>
        <h1 className={style.title} >Bienvenidos al horno de las ideas</h1>
        <Link to='/recipes'>
        <button className={style.button}>WELCOME</button>
        </Link>
    </div>
    )
};

export default LandingPage;

