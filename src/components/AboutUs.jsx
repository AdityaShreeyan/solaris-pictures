import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function AboutUs(){
    return(
        <>
        <Navbar />
        <section
            className="relative md:h-screen sm:h-[500px] h-[450px] bg-cover bg-center
            flex justify-center items-center"
            style={{
            backgroundImage: "url('src/assets/about-us-hero.png')",
            backgroundSize: 'cover', // Ensures the image covers the section without stretching
            backgroundPosition: 'center',
            }}
        >  
            <h1 className='text-2xl sm:text-4xl md:text-6xl font-bold text-white'>ABOUT US</h1>
        </section>
        
        <Footer />
        </>
    );
};