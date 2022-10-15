import './App.css';
import { useState } from 'react';
import {BrowserRouter, Routes, Route}  from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer.js/Footer';
import Contact from './components/pages/Contact/Contact';
import About from './components/pages/About/About';
import Courses from './components/pages/Courses/Courses';
import Testimonial from './components/pages/Pages/Testimonial/Testimonial';
import Ourteam from './components/pages/Pages/OurTeam/Ourteam';
import Error from './components/pages/Pages/404 Page/Error';
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
<Route path='/' element={<Home  changeTitle = {setHeaderTitle} />}/>
<Route path='/about' element={<About  changeTitle = {setHeaderTitle} />}/>
<Route path='/courses' element={<Courses  changeTitle = {setHeaderTitle} />}/>
<Route path='/contact' element={<Contact  changeTitle = {setHeaderTitle} />}/>
<Route path='/testimonial' element={<Testimonial  changeTitle = {setHeaderTitle} />}/>
<Route path='/team' element={<Ourteam  changeTitle = {setHeaderTitle} />}/>
<Route path='/404' element={<Error  changeTitle = {setHeaderTitle} />}/>
</Routes>
<Footer/>
</BrowserRouter>
</>
  );
}

export default App;
