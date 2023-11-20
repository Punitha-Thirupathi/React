import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Components/Navbar.jsx'
import Cards from './Cards/Cards.jsx';
import Main from './Cards/Main.jsx';
import "bootstrap/dist/css/bootstrap.min.css"; 


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Navbar />
      <Cards />
      <Main />
  </React.StrictMode>,
)
