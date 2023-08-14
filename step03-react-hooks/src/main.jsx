import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const demoInfo = {
  name: 'Re:code',
  age: 25,
  prefecture: 'Tokyo'
}

const DemoInfoContext = createContext(demoInfo)

ReactDOM.createRoot(document.getElementById('root')).render(
  <DemoInfoContext.Provider value={demoInfo}>
    <React.StrictMode>
        <App />
    </React.StrictMode>
  </DemoInfoContext.Provider>
)

export default DemoInfoContext;
