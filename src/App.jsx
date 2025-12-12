import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// My added imports are below
import Home from "./pages/Home";
import About from "./pages/About";
import Store from './pages/Store';

import Header from "./components/Header"
import ProductList from './components/ProductList';
import Footer from "./components/Footer"
//import test pages
import { BrowserRouter, Routes, Route } from 'react-router'
import Service from './pages/Service';

//Made this mistake but app is caps sensitive! Site wasn't working because I had route instead of Route when I created paths
function App() {
  

  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/store" element={<Store />}/>
          <Route path="/service" element={<Service />}/>
        </Routes>
        {/* <ProductList /> */}
        <Footer />
      </main>  
    </BrowserRouter>
  )
}

export default App
