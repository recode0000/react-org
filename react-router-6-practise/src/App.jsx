import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './home/'
import About from './about/'
import Contact from './contact/'
import NoMatch from './nomatch/'
import './App.css'

function App() {

  return (
    <div>
      <h1>React Router v6</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact message="Hello Contact"/>} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  )
}

export default App
