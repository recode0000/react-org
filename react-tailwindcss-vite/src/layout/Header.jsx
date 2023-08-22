import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <header className="px-5 py-8 flex flex-row justify-between">
      <h1 className="font-bold text-xl">
        <a href="/">テスト</a>
      </h1>
      <ul className="flex flex-row gap-6">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="about">About</NavLink>
        </li>
        <li>
          <NavLink to="contact">Contact</NavLink>
        </li>
      </ul>
    </header>
  )
}

export default Header