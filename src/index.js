import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import App from './App';
import CompMaker from './components/CompMaker';
import BuffList from './components/Buffs';
import Buff from './components/Buff';
import ClasesList from './components/Clases';
import Clase from './components/Clase';
import Home from './components/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="compmaker" element={<CompMaker />} />
        <Route path="buffs" element={<BuffList />}>
          <Route
            index
            element={
              <main style={{ padding: '1rem' }}>
                <p>Select a buff</p>
              </main>
            }
          />
          <Route path=":buffId" element={<Buff />} />
        </Route>
        <Route path="classes" element={<ClasesList />}>
          <Route
            index
            element={
              <main style={{ padding: '1rem' }}>
                <p>Select a class</p>
              </main>
            }
          />
          <Route path=":claseId" element={<Clase />} />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
