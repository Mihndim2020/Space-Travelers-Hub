import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/navStyles.css';

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Rockets</Link>
        </li>
        <li>
          <Link to="/missions">Missions</Link>
        </li>
        <li>
          <Link to="/profile">My profile</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
