import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            style={({ isActive }) => (isActive ? { color: 'blue' } : undefined)}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => (isActive ? { color: 'blue' } : undefined)}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => (isActive ? { color: 'blue' } : undefined)}
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : undefined)}
            to="/posts"
          >
            Posts
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Header