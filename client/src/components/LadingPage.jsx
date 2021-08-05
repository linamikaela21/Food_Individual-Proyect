import { Link } from "react-router-dom";

export function LandingPage() {
    return (
    <div>
        <h1>Bienvenidos al horno de las ideas</h1>
        {/* <Link to={Home}> */}
        <Link to='/home'>
        <button>WELCOME</button>
        </Link>
    </div>
    )
};

export default LandingPage;

