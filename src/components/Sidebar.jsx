import { NavLink } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
    const nombreAdmin = "Admin";

    return (
        <aside className="sidebar">
            <div className='sidebar-logo'>
                <h2>{nombreAdmin}</h2>
            </div>
            <nav className='sidebar-menu'>
                <NavLink to="/" className={({isActive}) => isActive ? "menu-item activo" : "menu-item"} end>
                    Panel General
                </NavLink>
                <NavLink to="/usuarios" className={({isActive}) => isActive ? "menu-item activo" : "menu-item"} end>
                    Usuario
                </NavLink>
                <NavLink to="/productos" className={({isActive}) => isActive ? "menu-item activo" : "menu-item"} end>
                    Productos
                </NavLink>
                <NavLink to="/configuracion" className={({isActive}) => isActive ? "menu-item activo" : "menu-item"} end>
                    Configuracion
                </NavLink>
            </nav>
            <div className='sidebar-footer'>
                <button className='btn-logout'>Cerrar sesion</button>
            </div>
        </aside>
    );

}

export default Sidebar;