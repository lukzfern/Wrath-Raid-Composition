import React from "react";

import { useParams } from "react-router-dom";
import { getClase } from '../clasesData';

export default function Clase() {
  let params = useParams();
  let clase = getClase(parseInt(params.claseId, 10));
  

  console.log(clase);

  return(
    <main style={{ padding: '1rem' }}>
        <h2>{clase.name}</h2>
        <img src={clase.thumb} alt="" />
      {clase.specs.map(({id, name, thumb}, index) => {
                return (
                  <div key={id}>
                    <h2>{name}</h2>
                    <img src={thumb} alt="" />
                  </div>
                )
      })}
    </main>
  );
}