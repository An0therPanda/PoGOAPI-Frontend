import React, { useState, useEffect } from "react";
import axios from "axios";

function DobleDano(props) {
  const [dobleDano, setDobleDano] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resultado = await axios(
        `http://localhost:3001/api/eficacias/doble_dano/${props.idTipo}`
      );
      setDobleDano(resultado.data);
    };
    fetchData();
  }, [props.idTipo]);

  return (
    <div className="table-responsive col-sm-6">
      <table class="table table-stripped">
        <thead className="table-dark bg-danger text-center">
          <tr>
            <th>Doble daño (x2)</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {dobleDano.map((dd) => (
            <tr key={dd.tipo_afectado.id}>
              <td>{dd.tipo_afectado.nombretipo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DobleDano;
