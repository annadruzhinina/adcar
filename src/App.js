import React from 'react';

import Services from "./Services";
import Header from "./Header";
import About from "./About";
import Hero from "./Hero";
import Footer from "./Footer";
import Info from "./Info";


function App() {
  return (
    <React.Fragment>
      {/*<Header/>*/}
      <Hero/>
      <About/>
      <Services/>
      <Info/>
      <Footer/>
    </React.Fragment>
   );

}

export default App;
