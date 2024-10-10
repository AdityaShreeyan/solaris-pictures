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
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('src/assets/hero-image.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start text-white px-4 sm:px-8 md:px-16">
        {!isClicked && (
          <>
            <h1
              className={`text-4xl sm:text-5xl md:text-7xl font-bold mb-4 transition duration-700 ${
                fadeOut ? 'opacity-0' : 'opacity-100'
              }`}
            >
              Solaris Pictures
            </h1>
            <p
              className={`text-lg sm:text-xl md:text-2xl mb-6 md:mb-10 max-w-lg transition duration-700 ${
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
            className={`text-lg sm:text-xl md:text-2xl mb-6 md:mb-10 max-w-lg transition duration-700 ${
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
        items-center justify-center space-y-4 sm:space-y-0 absolute bottom-24 leading-none">
          <button className="bg-red-600 hover:bg-red-700 px-6 py-3 
          rounded-lg text-white h-12">
            Learn More
          </button>
          {!isClicked && (
            <button
              className={`bg-transparent border-2 border-white px-6 py-3 
              rounded-lg text-white hover:bg-red-600 transition duration-200 h-12 
              ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
            >
              Play Video
            </button>
          )}
        </div>
      </div>
    </section>
  );
}