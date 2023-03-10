import React, { useState, useEffect } from "react";
import axios from "axios";

function NoDano(props) {
  const [noDano, setNoDano] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resultado = await axios(
        `http://localhost:3001/api/eficacias/no_dano/${props.idTipo}`
      );
      setNoDano(resultado.data);
    };
    fetchData();
  }, [props.idTipo]);

  return (
    <div className="table-responsive col-sm-6">
      <table class="table table-stripped">
        <thead className="table-dark bg-danger text-center">
          <tr>
            <th>Sin daño (x0)</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {noDano.map((nd) => (
            <tr key={nd.tipo_afectado.id}>
              <td>{nd.tipo_afectado.nombretipo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default NoDano;
