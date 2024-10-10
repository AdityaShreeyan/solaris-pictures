import React from 'react';

export default function Achievements(){
   return( 
   <section id='about' className='bg-pink-100 flex flex-col xl:flex-row items-start justify-between p-10'>
        <div className='md:w-full xl:w-1/2 relative'>
    
        {/* Red Square */}
        <div className='bg-red-600 h-11 w-11 sm:h-12 sm:w-12 md:h-16 md:w-16 absolute top-5 -left-2'></div>
        <h2 className='text-2xl sm:text-4xl md:text-6xl font-bold mt-10 mb-10 ml-5 relative'>
          Our Achievements
        </h2>
               
        <p className='mb-4 ml-5 text-base sm:text-lg md:text-2xl'>
        Our films have played at numerous film festivals world-wide and garnered several 
        pretigious national and international awards, celebrating our commitment to authentic
        storytelling with human connect, and inspiring change in the industry.
        </p>
        </div>

        {/* Adjust grid for larger screens */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 md:w-full xl:w-1/2'>

          {/* Card 1 */}
          <div className='group bg-white relative p-6 border-2 border-gray-300 rounded-md text-center overflow-hidden md:hover:text-white md:transition-all duration-500'>
            <div className='absolute inset-0 bg-red-600 transform translate-y-full md:group-hover:translate-y-0 md:transition-all duration-200 ease-in-out z-0'></div>
              <div className='relative z-10'>
                  <div className='w-12 h-12 mb-4 mx-auto'>
                      <svg className='w-full h-full text-red-600 md:group-hover:text-white transition duration-500' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmins="https://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h18M9 3v18m6-18v18M3 9h18m-9 3h9m-9 3h9m-9 3h9"></path>
                      </svg>
                  </div>
                  <h3 className='text-xl font-bold mb-2'>Festival Screenings</h3>
                  <p className='text-lg'>
                      250+ film festival screenings of all our films and still counting.
                  </p>
              </div>
          </div>

          {/* Card 2 */}
          <div className='group bg-white relative p-6 border-2 border-gray-300 rounded-md text-center overflow-hidden md:hover:text-white transition-all duration-500'>
            <div className='absolute inset-0 bg-red-600 transform translate-y-full md:group-hover:translate-y-0 transition-all duration-200 ease-in-out z-0'></div>
              <div className='relative z-10'>
                  <div className='w-12 h-12 mb-4 mx-auto'>
                      <svg className='w-full h-full text-red-600 md:group-hover:text-white transition duration-500' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmins="https://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 2h8v4H8V2zM7 6v5c0 1.5 2.5 2.5 5 2.5s5-1 5-2.5V6M7 11v5c0 1.5 2.5 2.5 5 2.5s5-1 5-2.5v-5M9 21v-2c0-.5-.5-1-1-1h8c-.5 0-1 .5-1 1v2"></path>
                      </svg>
                  </div>
                  <h3 className='text-xl font-bold mb-2'>Awards</h3>
                  <p className='text-lg'>
                      36 international awards including National Award
                  </p>
              </div>
          </div>

          {/* Card 3 */}
          <div className='group bg-white relative p-6 border-2 border-gray-300 rounded-md text-center overflow-hidden md:hover:text-white transition-all duration-500'>
            <div className='absolute inset-0 bg-red-600 transform translate-y-full md:group-hover:translate-y-0 transition-all duration-200 ease-in-out z-0'></div>
              <div className='relative z-10'>
                  <div className='w-12 h-12 mb-4 mx-auto'>
                      <svg className='w-full h-full text-red-600 md:group-hover:text-white transition duration-500' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmins="https://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7h2v10H3V7h2m14 0v10M7 7v10M7 7h10v10H7m5-7h3m-6 4h3"></path>
                      </svg>
                  </div>
                  <h3 className='text-xl font-bold mb-2'>Press</h3>
                  <p className='text-lg'>
                      The films by Solaris Pictures have garnered great reviews and write-ups in the press
                  </p>
              </div>
          </div>

          {/* Card 4 */}
          <div className='group bg-white relative p-6 border-2 border-gray-300 rounded-md text-center overflow-hidden md:hover:text-white transition-all duration-500'>
            <div className='absolute inset-0 bg-red-600 transform translate-y-full md:group-hover:translate-y-0 transition-all duration-200 ease-in-out z-0'></div>
              <div className='relative z-10'>
                  <div className='w-12 h-12 mb-4 mx-auto'>
                      <svg className='w-full h-full text-red-600 md:group-hover:text-white transition duration-500' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmins="https://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2a7 7 0 00-7 7c0 4.27 7 11 7 11s7-6.73 7-11a7 7 0 00-7-7zm0 9.2l-2.6 1.7.7-3-2.3-2h2.8L12 5l1 3h2.8l-2.3 2 .7 3L12 11.2z"></path>
                      </svg>
                  </div>
                  <h3 className='text-xl font-bold mb-2'>Critical Acclaim</h3>
                  <p className='text-lg'>
                      Our films have been greatly appreciated and embraced by the people
                  </p>
              </div>
          </div>
    </div>
    </section>
            )
}