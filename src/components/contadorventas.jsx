

import {useStates} from "react";
function ContadorVentas() {
    const [ ventas, setVentas ] = useStates(0);
    
    const registrarVentas = () => {
        setVentas(ventas+1);
    };

    const reiniciar = () =>{
        setVentas(0);
    };
    
    return (
<div style={{bacgroundColor: '#f0f0f0', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', width: '300px'}}>
    <h3> <style>{`h3 { color: #333; }`}</style></h3>
    <h1><style>{`h1 { color: #333; }`}</style></h1>
    <div>
        <button onClick={registrarVentas}>Registrar Venta</button>
        <button onClick={reiniciar}>Reiniciar</button>
    </div>
</div>



    )
