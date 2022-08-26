import React from 'react';
import './assets/styles/app.css';

import { Outlet, Link } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h1>Wrath Raid Composition</h1>
      <nav style={{ borderBottom: 'solid 1px', paddingBottom: '1rem' }}>
        <Link to="/compmaker">Composition Maker</Link> |{' '}
        <Link to="/buffs">Buff List</Link> |{' '}
        <Link to="/classes">Class Overview</Link>
      </nav>
      <Outlet />
    </div>

  );
}

export default App;
