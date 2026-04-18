import ServicioCard from "../components/ServicioCard";

function PanelGeneral(){
    return(
        <div>
            <h1>Panel General</h1>
            <p>Bienvenido al sistema. Aqui estan las estadisticas de hoy.</p>
            <ServicioCard />
        </div>
    );
}

export default PanelGeneral;