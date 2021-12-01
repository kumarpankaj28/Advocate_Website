import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Testimonial from '../Testimonial/Testimonial';
import About from './About/About';
import Contact from './Contact/Contact';
import Heros from './Heros/Heros';
import Services from './Services/Services';
import Stats from './Stats/Stats';


export default function LandingPage() {
    return (
        <div>
            <Header/>
            <Heros/>
            <Stats/>
            <About/>
            <Services/>
            <Testimonial/>
            <Contact/>
            <Footer/>
        </div>
    )
}
