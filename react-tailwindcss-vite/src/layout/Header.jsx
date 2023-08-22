import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <header className="px-5 py-8 flex flex-row justify-between">
      <h1 className="font-bold text-xl">
        <NavLink to="/">TEST</NavLink>
      </h1>
      <ul className="flex flex-row gap-6">
        <li>
          <NavLink to="about">About</NavLink>
        </li>
        <li>
          <NavLink to="/news">News</NavLink>
        </li>
        <li>
          <NavLink to="contact">Contact</NavLink>
        </li>
      </ul>
    </header>
  )
}

export default Header