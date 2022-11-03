import React from 'react';
import './App.css';
import Video from './components/video/video';
import Header from './components/header/header';
import Nav from './components/nav/nav'; 
import About from './components/about/about';
import Contact from './components/contact/contact';
import Experience from './components/experience/experience';
import Footer from './components/footer/footer';
// import Protofolio from './components/protofolio/protofolio';
import Services from './components/services/services';
// import Testimonials from './components/testimonials/testimonials';


function App() {
  return (
    <> 
    <Video/>
    <Header/>
    <Nav/>
    <About/>
    <Contact/>
    <Experience/>
    <Footer/>
    {/* <Protofolio/> */}
    <Services/>
    {/* <Testimonials/> */}
    </>
  )
}

export default App;
