import Navbar from './NavBar'

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen flex-col items-center justify-center font-mono text-gray-600">
      <Navbar />
      <div className="flex w-screen flex-1 flex-col items-center justify-center">
        {children}
      </div>
    </div>
  )
}

export default Layout;