import React from "react";

import { useParams } from "react-router-dom";
import { getBuff } from '../data';

export default function Buff() {

  let params = useParams();
  let buff = getBuff(parseInt(params.buffId, 10));

  return(
    <main style={{ padding: '1rem' }}>
      <h2>{buff.clase}</h2>
      <p>
        {buff.name}: {buff.id}
      </p>
      <p>
        {buff.description}
      </p>
    </main>
  );
}