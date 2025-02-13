import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from "./pages/Home";
import About from "./pages/About";
import Popular from "./pages/Popular";

import Header from './components/Header'
import Main from './components/Main'
function App() {
  
  return <>
  <BrowserRouter>
  <Header />
  <Main>

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="about" element={<About />}/>
    <Route path="popular" element={<Popular />}/>
  </Routes>
  </Main>
  </BrowserRouter>
  </> 
}
export default App
