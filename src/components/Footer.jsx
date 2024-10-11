import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between mb-6">
          <div className="mb-4">
            <h3 className="text-lg font-bold mb-5">SOLARIS PICTURES</h3>
            <p className="text-sm mb-10"><a href="mailto:solarispictures2@gmail.com" className="text-white hover:text-gray-400">solarispictures2@gmail.com</a></p>
            <div className="mt-2">
              <h4 className="flex justify-center text-md font-semibold">FOLLOW US</h4>
              <div className="flex justify-center space-x-4 mt-2">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Facebook</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Instagram</a>
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">X</a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">YouTube</a>
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-around flex-wrap mt-4 md:mt-0 w-full">
            <div className="text-center mb-4 sm:mb-0 flex-1">
              <h4 className="text-md font-semibold mb-5">KNOW US</h4>
              <ul className='space-y-2'>
                <li><a href="#about" className="text-white hover:text-gray-400">About</a></li>
                <li><a href="#films" className="text-white hover:text-gray-400">Films</a></li>
                <li><a href="#services" className="text-white hover:text-gray-400">Services</a></li>
                <li><a href="#awards" className="text-white hover:text-gray-400">Awards</a></li>
              </ul>
            </div>

            <div className="text-center mb-4 sm:mb-0 flex-1">
              <h4 className="text-md font-semibold mb-5">CONTACT US</h4>
              <ul className='space-y-2'>
                <li><a href="#contact" className="text-white hover:text-gray-400">Get In Touch</a></li>
                <li><a href="#job-opportunities" className="text-white hover:text-gray-400">Job Opportunities</a></li>
                <li><a href="#press-center" className="text-white hover:text-gray-400">Press Center</a></li>
                <li><a href="#merchandise" className="text-white hover:text-gray-400">Merchandise</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-sm">© 2024 Solaris Pictures. All rights reserved. <a href="#privacy-policy" className="text-white hover:text-gray-400">Privacy Policy</a>.</p>
        </div>
      </div>
    </footer>
  );
}