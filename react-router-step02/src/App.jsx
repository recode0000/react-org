import { Routes, Route, Outlet } from 'react-router-dom';
import Home from './routes/home';
import About from './routes/about';
import Contact from './routes/contact';
import Posts from './routes/posts';
import PostsIndex from './routes/postIndex'
import Post from './routes/post';
import NoMatch from './routes/nomatch';
import Header from './components/Header';

const Layout = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Outlet />
    </div>
  );
};

const Layout2 = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'end', fontWeight: 'bold', fontSize: '24px'}}>
      <Outlet />
    </div>
  );
};



function App() {
  return (
    <div>
      <h1>Hello React Router v6</h1>
      <Header />

      {/* 差分描画が起きる範囲 */}
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/posts" element={<Posts />}>
            <Route index element={<PostsIndex />} />
            <Route path=":postId" element={<Post />} />
          </Route>
        </Route>
        <Route element={<Layout2 />}>
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}
export default App;