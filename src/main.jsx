import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MouseBall from './Ui/MouseBall.jsx'



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <MouseBall/>
  </React.StrictMode>
);


