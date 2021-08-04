import React from "react"
import { Link } from "react-router-dom";
import { Home } from './Home'

export function LandingPage() {
    return (
    <div>
        <h1>Bienvenidos al horno de las ideas</h1>
        <Link to={Home}>
            <button>INGRESAR</button>
        </Link>
    </div>
    )
};

export default LandingPage;

