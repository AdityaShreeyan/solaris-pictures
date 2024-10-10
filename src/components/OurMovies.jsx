import React, { useState } from 'react';

export default function OurMovies() {
  const [category, setCategory] = useState('All Movies');

  const movies = [
    { id: 1, title: 'The Bucket List', category: 'Documentary', imageUrl: 'src/assets/the-bucket-list.jpg' },
    { id: 2, title: 'The Holiday', category: 'Features', imageUrl: 'src/assets/the-holiday.jpg' },
    { id: 3, title: 'The Journey', category: 'Short Films', imageUrl: 'src/assets/the-journey.jpg' },
    { id: 4, title: 'Way To Go', category: 'Short Films', imageUrl: 'src/assets/way-to-go.jpg' },
    { id: 5, title: 'Feel Free Today', category: 'Short Films', imageUrl: 'src/assets/feel-free-today.jpg' },
    { id: 6, title: 'The Beginning', category: 'PSAS', imageUrl: 'src/assets/the-beginning.jpg' },
  ];

  const filteredMovies = category === 'All Movies'
    ? movies
    : movies.filter(movie => movie.category === category);

  return (
    <section id="our-movies" className="bg-pink-100 p-10">
      {/* Heading */}
      <div className='flex justify-center relative mb-10 mt-14'>
                    <div className='bg-red-600 w-16 h-16 md:absolute -top-5 left-96'>

                    </div>
                    <h2 className='text-6xl font-bold md:relative z-10 top-1 -left-5'>
                        Our Movies
                    </h2>
                </div>
                <p className='text-center text-2xl'>
                    Our films are bold, unapologetic, and deeply moving, shedding light
                <p className='text-center text-2xl mb-10'>
                    on the diverse experiences of the community.
                </p>
                </p>
      {/* Filter Buttons */}
      <div className="flex justify-center space-x-10 mb-8">
        {['All Movies', 'Features', 'Documentary', 'Short Films', 'PSAS'].map((btnCategory) => (
          <button
            key={btnCategory}
            className={`px-6 py-3 hover:bg-gray-600 hover:text-white text-base font-semibold rounded-lg ${
              category === btnCategory ? 'bg-gray-900 text-white' : 'bg-gray-300'
            }`}
            onClick={() => setCategory(btnCategory)}
          >
            {btnCategory}
          </button>
        ))}
      </div>

      {/* Movie Grid */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {filteredMovies.map((movie) => (
          <div key={movie.id} className="relative group">
            {/* Image */}
            <img 
              src={movie.imageUrl} 
              alt={movie.title} 
              className="w-full h-80 rounded-lg object-cover"
            />
            
            {/* Hover Effect */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
              <div className="text-center">
              <button className="text-white p-2 rounded-full">
                  <svg
                    className="w-16 h-16"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={0.5}
                      d="M12,22 C6.4771525,22 2,17.5228475 2,12 C2,6.4771525 6.4771525,2 12,2 C17.5228475,2 22,6.4771525 22,12 C22,17.5228475 17.5228475,22 12,22 Z M12,21 C16.9705627,21 21,16.9705627 21,12 C21,7.02943725 16.9705627,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 Z M8,8.81797389 C8,8.48676533 8.09138399,8.16197812 8.2640927,7.87936387 C8.7824727,7.03110569 9.89035184,6.76368659 10.73861,7.28206659 L16.2248177,10.6347491 C16.4414031,10.7671068 16.6233909,10.9490946 16.7557486,11.16568 C17.2165308,11.9196873 16.978825,12.9044687 16.2248177,13.3652509 L10.73861,16.7179334 C10.4559958,16.8906421 10.1312086,16.9820261 9.8,16.9820261 C8.80588745,16.9820261 8,16.1761387 8,15.1820261 L8,8.81797389 Z M9,8.81797389 L9,15.1820261 C9,15.6238539 9.3581722,15.9820261 9.8,15.9820261 C9.9472038,15.9820261 10.0915537,15.941411 10.21716,15.8646516 L15.7033677,12.5119691 C15.9861204,12.3391758 16.0752601,11.9698827 15.9024668,11.68713 C15.8528326,11.6059105 15.7845872,11.5376651 15.7033677,11.4880309 L10.21716,8.13534842 C9.84015637,7.90495731 9.34776564,8.02381025 9.11737453,8.40081388 C9.04061511,8.52642021 9,8.67077009 9,8.81797389 Z" />
                  </svg>
                </button>
                <h3 className="text-white text-lg mb-2">{movie.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}