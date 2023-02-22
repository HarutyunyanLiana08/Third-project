
import './App.css';
import Header from './Header';
import Main from './Main';
import Product from './Product';
import Footer from './Footer';
import Contact from './Contact';
import Categories from './Categories';
import {
  Routes,
  Route,
  Link
  
}
from 'react-router-dom'
import About from './About';
import { useState } from 'react';

function App() {
  const [count,setCount]=useState(0)
  const handleClick =()=>{setCount(count+1)}
  return (
   
    <div className="App">
     
     <Header handleClick={handleClick} count={count}/>
     {/* <Main /> */}
     <Routes>
     
      <Route path="/" element={<Main handleClick={handleClick}/>}/>
      <Route path="/product/:id" element={<Product handleClick={handleClick}/>}/>
      <Route path="about" element={< About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="categories" element={<Categories/>}/>
     </Routes>
     <Footer />
    </div>
  );
}

export default App;
