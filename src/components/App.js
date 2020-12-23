import React from 'react';

import Services from "./Services";
import About from "./About";
import Hero from "./Hero";
import Footer from "./Footer";
import Info from "./Info";

function App() {
  return (
    <React.Fragment>
      <Hero/>
      <About/>
      <Services/>
      <Info/>
      <Footer/>
    </React.Fragment>
   );

}

export default App;
