import React, { useState, useEffect } from "react";
import axios from "axios";
import DobleDano from "./DobleDano";
import MitadDano from "./MitadDano";
import NoDano from "./NoDano";

function Eficacias() {
  const [tipos, setTipos] = useState([]);
  const [tipoSeleccionado, setTipoSeleccionado] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const resultado = await axios.get("http://localhost:3001/api/tipos");
      setTipos(resultado.data);
    };
    fetchData();
  }, []);

  function handleTipoSelected(event) {
    const selectedTipo = event.target.value;
    setTipoSeleccionado(selectedTipo);
  }

  return (
    <div className="center-block">
      <h2 className="text-center mt-2 font-weight-bold">
        Eficacia de los ataques
      </h2>
      <div className="d-flex justify-content-center">
        <label>Seleccione un tipo: </label>
        <select className="ml-2" onChange={handleTipoSelected}>
          <option selected disabled>
            Seleccione un tipo
          </option>
          {tipos.map((tipo) => (
            <option key={tipo.id} value={tipo.id}>
              {tipo.nombre}
            </option>
          ))}
        </select>
      </div>
      <div className="row mt-3">
        {tipoSeleccionado && <DobleDano idTipo={tipoSeleccionado} />}
        {tipoSeleccionado && <MitadDano idTipo={tipoSeleccionado} />}
        {tipoSeleccionado && <NoDano idTipo={tipoSeleccionado} />}
      </div>
    </div>
  );
}

export default Eficacias;
