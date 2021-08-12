import { NavLink} from 'react-router-dom';
import style from './index.module.css'
import logo  from '../../Images/logo.jpg'

export default function Nav() {
    return (
        <div className={style.navContainer}>
            {/* <div className={style.navImg}> */}
                    <img src={logo} alt="" width="100px" />
            {/* </div> */}
            <div className={style.navLinks}>
                <NavLink to="/recipes" activeClassName="nav-link-active" className={style.navLink}>HOME / INICIO</NavLink>
                <NavLink to="/about" activeClassName="nav-link-active" className={style.navLink}>ABOUT / ACERCA</NavLink>
                <NavLink to="/contact" activeClassName="nav-link-active" className={style.navLink}>CONTACT / CONTACTO</NavLink>
            </div>
            <span className='nav-text'>Proyecto Individual FT13</span>
        </div>
    )
}