function UsuariosLista() {
    return (
        <div>
            <h1>Lista de usuarios</h1>
            <p>Pasando PROPS uno por uno</p>
            <div style={{display: 'flex', flexDireccion: 'column', gap: '15px'}}>
                <usuarioCard
                nombre="anderson alvarado"
                rol="administrador"
                estado="activo"
                imagen="https://randomuser.me/api/portraits/men/32.jpg"
                />
                <usuarioCard
                nombre="marcela juliana"
                rol="diseñadora"
                estado="Inactivo"
                imagen="https://randomuser.me/api/portraits/women/32.jpg"
                />
            </div>
        </div>
    );