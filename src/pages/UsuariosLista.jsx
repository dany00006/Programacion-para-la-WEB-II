import { Link } from 'react-router-dom';

function UsuariosLista() {
    return (
        <div>
            <h1>Lista de usuarios</h1>
            <ul>
                <li><Link to="/usuario/123">Ver perfil del usuario Juan Perez (123)</Link></li>
                <li><Link to="/usuario/217">Ver perfil del usuario Ana Gomez (217)</Link></li>
            </ul>
        </div>
    );
}







export default UsuariosLista;