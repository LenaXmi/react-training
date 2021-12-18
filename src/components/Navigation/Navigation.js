import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => (
  <nav>
    <NavLink to="/" className={s.link}>
      Main
    </NavLink>
    <NavLink to="/authors" className={s.link}>
      Authors
    </NavLink>
    <NavLink to="/books" className={s.link}>
      Book
    </NavLink>
  </nav>
);

export default Navigation;
