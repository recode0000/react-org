import { Routes, Route } from "react-router-dom";
import Header from "./layout/Header";
import Home from "./routes/home";
import News from "./routes/news";
import About from "./routes/about";
import Contact from "./routes/contact";
import NotFound from "./routes/notFound";
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  )
}

export default App
