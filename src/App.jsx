import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from "./pages/Home";
import About from "./pages/About";
import Popular from "./pages/Popular";
import Recipe from "./pages/Recipe";
import Product from "./pages/Product";
import ContactUs from "./pages/ContactUs";
import PageNotFound from "./pages/PageNotFound";

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer';
function App() {
  
  return <>
  <BrowserRouter>
  <Header />
  <Main>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />}/>
      <Route path="popular" element={<Popular />}/>
      <Route path="recipe" element={<Recipe />}/>
      <Route path="product" element={<Product />}/>
      <Route path="contactus" element={<ContactUs />}/>
      <Route path="*" element={<PageNotFound />}/>
    </Routes>
  </Main>
  <Footer />
  </BrowserRouter>
  </> 
}
export default App
