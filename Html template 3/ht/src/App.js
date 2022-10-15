import './App.css';
import { useState } from 'react';
import {BrowserRouter, Routes, Route}  from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Services from './Pages/Services/Services';
import Portfolio from './Pages/Portfolio/Portfolio';
import Pricing from './Pages/Pricing/Pricing';
import Contact from './Pages/Contact/Contact';
import Skills from './Pages/pages/Skills/Skills';
import TeamMembers from './Pages/pages/Team Members/TeamMembers';
import Reviews from './Pages/pages/Reviews/Reviews';
import Clients from './Pages/pages/Clients/Clients';
import SinglePage from './Pages/pages/Single Page/SinglePage';
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
  <Route path='/' element={<Home  changeTitle = {setHeaderTitle}/>} />
  <Route path='/about' element={<About  changeTitle = {setHeaderTitle}/>} />
  <Route path='/service' element={<Services  changeTitle = {setHeaderTitle}/>} />
  <Route path='/portfolio' element={<Portfolio  changeTitle = {setHeaderTitle}/>} />
  <Route path='/pricing' element={<Pricing  changeTitle = {setHeaderTitle}/>} />
  <Route path='/contact' element={<Contact  changeTitle = {setHeaderTitle}/>} />
  <Route path='/skill' element={<Skills  changeTitle = {setHeaderTitle}/>} />
  <Route path='/team' element={<TeamMembers  changeTitle = {setHeaderTitle}/>} />
  <Route path='/review' element={<Reviews  changeTitle = {setHeaderTitle}/>} />
  <Route path='/client' element={<Clients  changeTitle = {setHeaderTitle}/>} />
  <Route path='/single' element={<SinglePage  changeTitle = {setHeaderTitle}/>} />
</Routes>
<Footer/>
</BrowserRouter>
</>
  );
}

export default App;
