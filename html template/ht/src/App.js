// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import About from './components/pages/about/About';
import Whatwedo from './components/pages/Whatwedo/Whatwedo'; 
import Pricing from './components/pages/Pricing/Pricing';
import Contact from './components/pages/Contact/Contact';
import Home from './components/pages/Home/Home';

function App() {
  let [title, setTitle] = useState('');

  const setHeaderTitle=(titleSet)=>{
    setTitle(titleSet)
 
  }

  return (
<>
<BrowserRouter>
<Header selectedTitle={title}/>
<Routes>
<Route path='/' element={<Home changeTitle = {setHeaderTitle} />}/>
  <Route path='/about' element={<About changeTitle = {setHeaderTitle} />}/>
  <Route path='/we-do' element={<Whatwedo changeTitle = {setHeaderTitle} />}/>
  <Route path='/pricing' element={<Pricing changeTitle = {setHeaderTitle} />}/>
  <Route path='/contact' element={<Contact changeTitle = {setHeaderTitle} />}/>
</Routes>
<Footer selectedTitle={title}/> 
</BrowserRouter>
</>
  );
}

export default App;
