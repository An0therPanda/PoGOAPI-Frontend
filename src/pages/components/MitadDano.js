import React, { useState, useEffect } from "react";
import axios from "axios";

function MitadDano(props) {
  const [mitadDano, setMitadDano] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resultado = await axios(
        `http://localhost:3001/api/eficacias/mitad_dano/${props.idTipo}`
      );
      setMitadDano(resultado.data);
    };
    fetchData();
  }, [props.idTipo]);

  return (
    <div className="table-responsive col-sm-6">
      <table class="table table-stripped">
        <thead className="table-dark bg-danger text-center">
          <tr>
            <th>Mitad de daño (x0.5)</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {mitadDano.map((md) => (
            <tr key={md.tipo_afectado.id}>
              <td>{md.tipo_afectado.nombretipo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MitadDano;
