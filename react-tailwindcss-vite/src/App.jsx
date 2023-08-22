import { Routes, Route } from "react-router-dom";
import Header from "./layout/Header";
import Home from "./routes/home";
import About from "./routes/about";
import Contact from "./routes/contact";
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  )
}

export default App
