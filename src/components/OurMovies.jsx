import React, { useState } from 'react';

export default function OurMovies() {
  const [category, setCategory] = useState('All Movies');

  const movies = [
    { id: 1, title: 'The Bucket List', category: 'Documentary', imageUrl: 'src/assets/the-holiday.png' },
    { id: 2, title: 'The Holiday', category: 'Features', imageUrl: 'src/assets/the-holiday.png' },
    { id: 3, title: 'The Journey Home', category: 'Short Films', imageUrl: 'src/assets/the-holiday.png'},
    { id: 4, title: 'Way To Go', category: 'Short Films', imageUrl: 'src/assets/way-to-go.png' },
    { id: 5, title: 'Feel Free Today', category: 'Short Films', imageUrl: 'src/assets/feel-free-today.png' },
    { id: 6, title: 'The Beginning', category: 'PSAS', imageUrl: 'src/assets/the-beginning.png' },
  ];

  const filteredMovies = category === 'All Movies'
    ? movies
    : movies.filter(movie => movie.category === category);

  return (
    <section id="our-movies" className="bg-pink-100 p-10">
      {/* Heading */}
      <div className='mx-auto px-10 relative'>
        <div className='absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          {/* Red Square  */}
          <div className='bg-red-600 h-11 w-11 sm:h-12 sm:w-12 md:h-16 md:w-16 absolute top-5 -left-2'></div>
          <h2 className='text-2xl sm:text-4xl md:text-6xl font-bold mt-10 sm:mt-9 md:ml-5 mb-10 ml-5 relative whitespace-nowrap'>
            Our Movies
          </h2>
        </div>
      </div>
      <p className='mt-20 md:mt-28 text-center text-base sm:text-lg md:text-2xl'>
        Our films are bold, unapologetic, and deeply moving, shedding light
      </p>
      <p className='text-center text-base sm:text-lg md:text-2xl mb-10'>
        on the diverse experiences of the community.
      </p>
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {['All Movies', 'Features', 'Documentary', 'Short Films', 'PSAS'].map((btnCategory) => (
          <button
            key={btnCategory}
            className={`px-4 py-2 hover:bg-gray-600 hover:text-white text-base font-semibold rounded-lg ${
              category === btnCategory ? 'bg-gray-900 text-white' : 'bg-gray-300'
            }`}
            onClick={() => setCategory(btnCategory)}
          >
            {btnCategory}
          </button>
        ))}
      </div>

      {/* Movie Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {filteredMovies.map((movie) => (
          <div key={movie.id} className="relative group">
            {/* Image */}
            <img 
              src={movie.imageUrl} 
              alt={movie.title} 
              className="w-full h-full rounded-lg object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 rounded-lg">

              <button className="rounded-full p-2">
                {/* Play SVG Icon */}
                <svg className='h-7 w-7 sm:h-10 sm:w-10' fill="#ffffff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	                    viewBox="0 0 60 60" xml:space="preserve">
                <g>
	              <path d="M45.563,29.174l-22-15c-0.307-0.208-0.703-0.231-1.031-0.058C22.205,14.289,22,14.629,22,15v30
		            c0,0.371,0.205,0.711,0.533,0.884C22.679,45.962,22.84,46,23,46c0.197,0,0.394-0.059,0.563-0.174l22-15
		            C45.836,30.64,46,30.331,46,30S45.836,29.36,45.563,29.174z M24,43.107V16.893L43.225,30L24,43.107z"/>
	              <path d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M30,58C14.561,58,2,45.439,2,30
		            S14.561,2,30,2s28,12.561,28,28S45.439,58,30,58z"/>
                </g>
                </svg>
              </button>
              <h3 className="text-white text-sm sm:text-base md:text-lg font-bold mb-2">{movie.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}