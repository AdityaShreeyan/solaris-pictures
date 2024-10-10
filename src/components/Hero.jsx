import React, { useState } from 'react';

export default function Hero() {
  const [isClicked, setIsClicked] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const handleClick = () => {
    if (!isClicked) {
      setFadeOut(true);
      setTimeout(() => {
        setIsClicked(true);
        setFadeOut(false);
      }, 300);
    } else {
      setFadeOut(true);
      setTimeout(() => {
        setIsClicked(false);
        setFadeOut(false);
      }, 300);
    }
  };

  return (
    <section
    className="relative md:h-screen sm:h-[500px] h-[450px] bg-cover bg-center"
    style={{
      backgroundImage: "url('src/assets/hbz-lgbt-movies-weekend-1494271153 1.png')",
      backgroundSize: 'cover', // Ensures the image covers the section without stretching
      backgroundPosition: 'center',
    }}
  >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start text-white px-4 sm:px-8 md:px-16">
        {!isClicked && (
          <>
            <h1
              className={`text-2xl sm:text-4xl md:text-6xl font-bold mb-4 transition duration-700 ${
                fadeOut ? 'opacity-0' : 'opacity-100'
              }`}
            >
              Solaris Pictures
            </h1>
            <p
              className={`text-base sm:text-lg md:text-2xl mb-1 md:mb-10 max-w-lg transition duration-700 ${
                fadeOut ? 'opacity-0' : 'opacity-100'
              }`}
            >
              Celebrating love, diversity, and the power of storytelling through
              the lens of LGBTQ+ experiences.
            </p>
          </>
        )}
        {isClicked && (
          <p
            className={`text-base sm:text-lg md:text-2xl mb-1 md:mb-10 max-w-lg transition duration-700 ${
              fadeOut ? 'opacity-0' : 'opacity-100'
            }`}
          >
            Through the art of storytelling, I strive to capture rich
            complexities of LGBTQ+ experiences, weaving narratives that inspire
            connection, foster understanding, and celebrate the beauty of love
            in all its forms.
          </p>
        )}

        {/* Arrow button now centered between the text and buttons */}
        <div className="flex flex-col items-center space-y-4 sm:mb-8 mb-24">
          <button
            onClick={handleClick}
            className={`md:p-6 p-3 rounded-full text-white bg-transparent 
            sm:mx-auto sm:mt-4 sm:mb-4
            md:absolute md:right-6 md:top-1/2 md:-translate-y-1/2`}
          >
            {!isClicked ? (
              <svg
                className="md:w-24 sm:w-16 md:h-24 sm:h-16 w-12 h-12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
              </svg>
            ) : (
              <svg
                className="md:w-24 sm:w-16 md:h-24 sm:h-16 w-12 h-12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 5l-7 7 7 7"></path>
              </svg>
            )}
          </button>
        </div>

        <div className="flex flex-col sm:flex-row sm:space-x-4 
        items-center justify-center space-y-4 sm:space-y-0 absolute bottom-10 sm:bottom-20 md:bottom-72 leading-none">
          <div className="min-h-[48px]">
          <button className="bg-red-600 hover:bg-red-700 px-6 sm:py-6 py-5 md:py-3 
          rounded-lg text-white sm:h-8 h-4 md:h-12 flex items-center space-x-4
          text-base sm:text-lg md:text-xl">
            <span>Learn More</span>
            <svg
              className="h-5 w-5 mt-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"><path strokeLinecap="round"strokeLinejoin="round"strokeWidth="2"d="M9.125 0.875L14.75 6.5M14.75 6.5L9.125 12.125M14.75 6.5L1.25 6.5" /></svg>
          </button>
          </div>
          <div className="min-h-[48px]">  
          {!isClicked && (
            <button
              className={`bg-transparent border-2 border-white px-6 sm:py-6 py-5 md:py-3  
              rounded-lg text-white hover:bg-red-600 transition duration-200
              sm:h-8 h-4 md:h-12
              flex items-center space-x-4
              text-base sm:text-lg md:text-xl
              ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
            <span>Play Video</span>
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"><path strokeLinecap="round"strokeLinejoin="round"strokeWidth="2"d="M5.25 6.15296C5.25 5.29696 6.167 4.75496 6.917 5.16696L18.457 11.514C18.6336 11.611 18.781 11.7537 18.8836 11.9271C18.9862 12.1006 19.0403 12.2984 19.0403 12.5C19.0403 12.7015 18.9862 12.8993 18.8836 13.0728C18.781 13.2462 18.6336 13.3889 18.457 13.486L6.917 19.833C6.74569 19.9271 6.55278 19.9751 6.35731 19.972C6.16184 19.9689 5.97054 19.915 5.80227 19.8154C5.634 19.7159 5.49457 19.5742 5.39773 19.4044C5.30089 19.2346 5.24997 19.0425 5.25 18.847V6.15296Z" /></svg>
            </button>
          )}
          </div>
        </div>
      </div>
    </section>
  );
}