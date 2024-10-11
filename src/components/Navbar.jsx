import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  console.log("Initial isScrolled:", isScrolled); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () =>{
      console.log("Scroll position:", window.scrollY); 
      if(window.scrollY > 100){
        setIsScrolled(true);
      }
      else{
        setIsScrolled(false);
      }
    }
    window.addEventListener('scroll',handleScroll);
    return() => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[]);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-colors duration-150
       ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent' }`}>
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex">
            <a href="/"><img src="src/assets/Solaris-Pictures_Logo 1.png" alt="Logo" className="h-12 w-auto"/></a>
          </div>
          <div className="hidden md:flex space-x-20 items-center">
            <a href="#home" className={`${isScrolled ? 'text-black' : 'text-white'} hover:text-gray-300`}>Home</a>
            <a href="#about" className={`${isScrolled ? 'text-black' : 'text-white'} hover:text-gray-400`}>About</a>
            <a href="#festivals" className={`${isScrolled ? 'text-black' : 'text-white'} hover:text-gray-400`}>Festivals</a>
            <a href="#awards" className={`${isScrolled ? 'text-black' : 'text-white'} hover:text-gray-400`}>Awards</a>
            <a href="#contact" className="bg-red-600 px-4 py-2 rounded-md hover:bg-red-700 flex items-center space-x-2"
              style={{ color: isScrolled ? 'black' : 'white' }}>
              <span>Contact</span>
              <svg
              className="h-5 w-5 mt-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"><path strokeLinecap="round"strokeLinejoin="round"strokeWidth="2"d="M9.125 0.875L14.75 6.5M14.75 6.5L9.125 12.125M14.75 6.5L1.25 6.5" /></svg></a>
          </div>

          {/* Hamburger menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className={`focus:outline-none ${isScrolled ? 'text-black' : 'text-white'}`}>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full bg-gray-900 text-white w-56 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-white focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="flex flex-col mt-16 space-y-6 px-4 w-32">
          <a href="#home" className="text-white block text-lg hover:text-gray-300">Home</a>
          <a href="#about" className="text-white block text-lg hover:text-gray-300">About</a>
          <a href="#festivals" className="text-white block text-lg hover:text-gray-300">Festivals</a>
          <a href="#awards" className="text-white block text-lg hover:text-gray-300">Awards</a>
          <a href="#contact" className="bg-red-600 text-white pl-1 text-lg py-2 rounded-md hover:bg-red-700 flex items-center space-x-2">
              <span>Contact</span>
              <svg
              className="h-5 w-5 mt-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"><path strokeLinecap="round"strokeLinejoin="round"strokeWidth="2"d="M9.125 0.875L14.75 6.5M14.75 6.5L9.125 12.125M14.75 6.5L1.25 6.5" /></svg></a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;