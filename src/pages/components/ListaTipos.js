import React, { useState, useEffect } from "react";
import axios from "axios";

function ListaTipos() {
  const [tipos, setTipos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const resultado = await axios.get("http://localhost:3001/api/tipos");
      setTipos(resultado.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2 className="text-center mt-2 font-weight-bold">Tipos de Pokémon</h2>
      <div className="container-fluid">
        <table className="table table-stripped table-bordered table-responsive">
          <thead className="table-dark text-center">
            <tr>
              <th>ID</th>
              <th>Nombre</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {tipos.map((tipo) => (
              <tr key={tipo.id}>
                <td>{tipo.id}</td>
                <td>{tipo.nombre}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListaTipos;
