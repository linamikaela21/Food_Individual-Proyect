import { NavLink} from 'react-router-dom';
import style from './index.module.css'

export default function Nav() {
    return (
        <div className={style.navContainer}>
            <div className={style.navImg}>
                {/* <a href="https://www.soyhenry.com" target="_blank" rel="noopener noreferrer">
                    <img src={logoHenry} alt="" />
                </a> */}
                <h1>Aca va el titulo y una imagen</h1>
            </div>
            <div className={style.navLinks}>
                <NavLink to="/recipes" activeClassName="nav-link-active" className='nav-link'>HOME / INICIO</NavLink>
                <NavLink to="/about" activeClassName="nav-link-active" className='nav-link'>ABOUT / ACERCA</NavLink>
                <NavLink to="/contact" activeClassName="nav-link-active" className='nav-link'>CONTACT / CONTACTO</NavLink>
            </div>
            <span className='nav-text'>Proyecto Individual FT13</span>
        </div>
    )
}