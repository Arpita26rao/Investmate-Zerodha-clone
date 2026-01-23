import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Pricing from './Pricing';
import Education from './Education';

import OpenAccount from'../OpenAccount';
import Navbar from'../Navbar';
import Footer from '../Footer';






function Homepage(){
    return(
        <>
        <Navbar/>
         <Hero/>
         <Awards/>
         <Pricing/>
         <Education/>
         <OpenAccount/>
         <Footer/>

        </>
    );
}

export default Homepage;