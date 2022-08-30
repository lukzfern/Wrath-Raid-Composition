import * as React from "react";

import {
  useLocation,
  NavLink,
  Outlet,
  useSearchParams,
} from 'react-router-dom';
import { getClases } from "../clasesData";

function QueryNavLink({ to, ...props }) {
  let location = useLocation();
  return <NavLink to={to + location.search} {...props} />;
}

export default function Clases() {
  let clases = getClases();
  let [searchParams, setSearchParams] = useSearchParams({ replace: true });

  return (
    <div style={{ display: 'flex' }}>
      <nav style={{ borderRight: 'solid 1px', padding: '1rem' }}>
        <input
          value={searchParams.get('filter') || ''}
          onChange={(e) => {
            let filter = e.target.value;
            if (filter) {
              setSearchParams({ filter }, { replace: true });
            } else {
              setSearchParams({}, { replace: true });
            }
          }}
        />
        {clases
          .filter((clase) => {
            let filter = searchParams.get('filter');
            if (!filter) return true;
            let name = clase.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((clase) => (
            <QueryNavLink
              key={clase.id}
              style={({ isActive }) => {
                return {
                  display: 'block',
                  margin: '1rem 0',
                  color: isActive ? 'red' : '',
                };
              }}
              to={`/classes/${clase.id}`}
            >
              {clase.name}
            </QueryNavLink>
          ))}
      </nav>
      <Outlet />
    </div>
  )
}