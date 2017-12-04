import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav () {
    return (
      <ul className='nav'>
        <li>
          <NavLink
            exact activeClassName='active'
            to='/'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName='active'
            to='/characters'>
            Characters
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName='active'
            to='/journal'>
            Journal
          </NavLink>
        </li>
      </ul>

    )
}