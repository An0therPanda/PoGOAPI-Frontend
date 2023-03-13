import React, { useState, useEffect } from "react";
import axios from "axios";

function TablaEficacia(props) {
  const [eficacia, setEficacia] = useState([]);
  let tituloTabla = "";

  useEffect(() => {
    const fetchData = async () => {
      const resultado = await axios(
        `http://localhost:3001/api/eficacia/${props.idEficacia}/${props.idTipo}`
      );
      setEficacia(resultado.data);
    };
    fetchData();
  }, [props.idEficacia, props.idTipo]);

  if (props.idEficacia === 1) {
    tituloTabla = "Doble daño (x2)";
  } else if (props.idEficacia === 2) {
    tituloTabla = "Mitad de daño (x0.5)";
  } else if (props.idEficacia === 3) {
    tituloTabla = "Sin daño (x0)";
  }

  return (
    <div className="row mt-3">
      <div className="table-responsive col-sm-6">
        <table class="table table-stripped">
          <thead className="table-dark bg-danger text-center">
            <tr>
              <th>{tituloTabla}</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {eficacia.map((te) => (
              <tr key={te.tipo_afectado.id}>
                <td>{te.tipo_afectado.nombretipo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TablaEficacia;
