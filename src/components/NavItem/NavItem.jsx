import './navitem.css';
import { Link } from 'react-router-dom';

function NavItem( {nombre, category} ) {
  return (
      <li className="nav-item">
        <Link className="nav-link" to={category}>
          {nombre}
        </Link>
      </li>
  );
}

export default NavItem;