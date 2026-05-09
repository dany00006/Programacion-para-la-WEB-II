import { useState } from "react";

function BuscarEnVivo(){
    const [busqueda, setBusqueda] = useState("");
    const [resultados, setResultados] = useState([]);

    const handleChange = (e) => {
        setBusqueda(e.target.value);
        setResultados([e.target.value]);
    };

    const limpiar = () => {
        setBusqueda("");
        setResultados([]);
    };

    return(
        <div style={{backgroundColor: "black", color: "white", padding: "20px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", marginBottom: "20px"}}>
            <h2>Buscador en Vivo</h2>
            <input 
                type="text"
                placeholder="escribe aquí"
                value={busqueda}
                onChange={handleChange}
                style={{padding: "10px", borderRadius: "5px", border: "1px solid #ccc", width: "100%", marginBottom: "20px"}}
            />
            <p style={{fontStyle: "italic", color: "#888"}}>
                Vista previa en vivo: <strong>{busqueda}</strong>
            </p>

            <button onClick={limpiar} style={{padding: "10px 20px", borderRadius: "5px", border: "none", backgroundColor: "#007BFF", color: "white", cursor: "pointer"}}>  
                Limpiar
            </button>

            {resultados.length > 0 && (
                <ul>
                    {resultados.map((resultado, index) => (
                        <li key={index}>{resultado}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default BuscarEnVivo;