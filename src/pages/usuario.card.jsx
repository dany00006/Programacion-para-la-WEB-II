import './UsuarioCard.css';

function UsuarioCard({ nombre, rol, estado, imagen}){
    const claseEstado = estado === 'Activo' ? 'badge-active' : 'badge-inactivo';
    return(
        <div classname='usuario-card'>
     <h3>{nombre}</h3>
     <p classname='usuario-rol'>{rol}</p>
     <span classname={'usuario-badge ${claseestado}'}>
        {estado}
        </span>           
        
        <img src="" alt="" />
            <div>
                <h3></h3>
                <p></p>
                <span></span>
            </div>
            <div>
                <button></button>
            </div>
        </div>
    )

}

export default UsuarioCard