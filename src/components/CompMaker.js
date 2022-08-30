import React, { useState } from 'react';
import { getClases } from "../clasesData";
import { getBuffs } from "../buffData";

const CompMaker = () => {

  const [buffs, updateBuffs] = useState(getBuffs());
  const [clases, updateClases] = useState(getClases());

  return(
  <div className="App">
    <p>Comp Maker</p>
  </div>
  );
};

export default CompMaker;