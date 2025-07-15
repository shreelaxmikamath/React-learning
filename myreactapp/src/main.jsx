import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import  Header  from "./Header.jsx";
import  Body  from "./Body.jsx";
import  Footer  from "./Footer.jsx";


function Dummy(){
  return(
  <>
  <Header/>
  <Body/>
  <Footer/>
  </>
  );
}

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  <Dummy />
)
