import * as React from "react";

import {
  useLocation,
  NavLink,
  Outlet,
  useSearchParams,
} from 'react-router-dom';
import { getBuffs } from "../data";

function QueryNavLink({ to, ...props }) {
  let location = useLocation();
  return <NavLink to={to + location.search} {...props} />;
}

export default function Buffs() {
  let buffs = getBuffs();
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
        {buffs
          .filter((buff) => {
            let filter = searchParams.get('filter');
            if (!filter) return true;
            let name = buff.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((buff) => (
            <QueryNavLink
              key={buff.id}
              style={({ isActive }) => {
                return {
                  display: 'block',
                  margin: '1rem 0',
                  color: isActive ? 'red' : '',
                };
              }}
              to={`/buffs/${buff.id}`}
            >
              {buff.name}
            </QueryNavLink>
          ))}
      </nav>
      <Outlet />
    </div>
  )
}