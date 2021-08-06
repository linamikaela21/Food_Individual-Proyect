import { Link } from "react-router-dom";
import './index.css'

export function LandingPage() {
    return (
    <div>
        <h1>Bienvenidos al horno de las ideas</h1>
        <Link to='/recipes'>
        <button>WELCOME</button>
        </Link>
    </div>
    )
};

export default LandingPage;

