import React from 'react';

const highlights = [
  {
    imgSrc: 'src/assets/Frame 1000003048.png', // Replace with your image link
    alt: 'Highlight 1',
    link: 'https://www.instagram.com/',
  },
  {
    imgSrc: 'src/assets/Frame 1000003048 (1).png',
    alt: 'Highlight 2',
    link: 'https://www.instagram.com/',
  },
  {
    imgSrc: 'src/assets/Frame 1000003048 (2).png',
    alt: 'Highlight 3',
    link: 'https://www.instagram.com/',
  },
];

const InstagramHighlights = () => {
  return (
    <section id='instagram-highlights' className='bg-pink-100 py-10'>
      
      <div className='mx-auto px-10 relative'>
                 <div className='absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    {/* Red Square  */}
                    <div className='bg-red-600 h-11 w-11 sm:h-12 sm:w-12 md:h-16 md:w-16 absolute top-5 -left-2'></div>
                    <h2 className='text-2xl sm:text-4xl md:text-6xl font-bold mt-10 sm:mt-[35px] md:mt-8 ml-7 md:ml-10 mb-10 relative whitespace-nowrap'>Instagram Highlights</h2>
                    </div>
                    </div>
                <p className='mt-20 md:mt-28 text-center text-base sm:text-lg md:text-2xl mb-10'>
                   See what's happening in real-time with our latest Instagram posts. 
                </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {highlights.map((highlight, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white shadow-lg rounded-md overflow-hidden
            max-w-sm mx-auto"
          >
            <img
              src={highlight.imgSrc}
              alt={highlight.alt}
              className="w-full object-cover h-64"
            />
            <div className="bg-white w-full p-4 text-center">
              <a
                href={highlight.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View more on Instagram
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InstagramHighlights;