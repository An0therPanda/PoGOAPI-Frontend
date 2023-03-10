import React, { useState, useEffect } from "react";
import axios from "axios";

function TablaEficacia(props) {
  const [eficacia, setEficacia] = useState([]);
  let tableHeader = "";

  useEffect(() => {
    const fetchData = async () => {
      const resultado = await axios(
        `http://localhost:3001/api/eficacias/${props.idEficacia}/${props.idTipo}`
      );
      setEficacia(resultado.data);
    };
    fetchData();
  }, [props.idEficacia, props.idTipo]);

  if (props.idEficacia === 1) {
    tableHeader = (
      <thead className="table-dark bg-danger text-center">
        <tr>
          <th>Doble daño (x2)</th>
        </tr>
      </thead>
    );
  } else if (props.idEficacia === 2) {
    tableHeader = (
      <thead className="table-dark bg-danger text-center">
        <tr>
          <th>Mitad de daño (x0.5)</th>
        </tr>
      </thead>
    );
  } else if (props.idEficacia === 3) {
    tableHeader = (
      <thead className="table-dark bg-danger text-center">
        <tr>
          <th>Sin daño (x0)</th>
        </tr>
      </thead>
    );
  }

  return (
    <div className="row mt-3">
      <div className="table-responsive col-sm-6">
        <table class="table table-stripped">
          {tableHeader}
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
