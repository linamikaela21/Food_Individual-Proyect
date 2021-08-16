import { NavLink } from "react-router-dom";
import style from "./index.module.css";
import logo from "../../Images/logo.jpg";

export default function Nav() {
  return (
    <div className={style.navContainer}>
      <img src={logo} alt="" width="100px" />
      <div className={style.navLinks}>
        <NavLink
          to="/recipes"
          activeClassName="nav-link-active"
          className={style.navLink}
        >
          HOME / INICIO
        </NavLink>
        <NavLink
          to="/about"
          activeClassName="nav-link-active"
          className={style.navLink}
        >
          ABOUT / ACERCA
        </NavLink>
        <div>
          {/* ESTO ME LLEVA AL FORMULARIO PARA CREAR MI RECETA */}
          <button className={style.linkMakeRecipe}>
            <NavLink className={style.navLink} to="/recipe">
             CREA TU PROPIA RECETA <br /> MAKE YOUR RECIPE
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  );
}
