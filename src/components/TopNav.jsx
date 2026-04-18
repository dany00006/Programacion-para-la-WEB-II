import './TopNav.css';

function TopNav () {
    const usuarioActual = "Juan Perez";

    return(
        <header className='topnav'>
            <div className='buscardor'>
                <input type="text" placeholder='Buscar...' className='input-buscar' />
            </div>
            <div className='perfil-usuario'>
                <span className='notificaciones'>🔔</span>
                <div className='avatar'>JP</div>
                <span className='nomber-usuario'>Hola, {usuarioActual}</span>
            </div>
        </header>
    );
}

export default TopNav;