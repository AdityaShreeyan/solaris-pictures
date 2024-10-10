import React from 'react';

export default function About(){
    return(
        <section id='about' className='flex flex-col items-center lg:flex-row lg:items-start justify-between p-10'>
            <div className='lg:w-1/2 relative'>
                    <div className='absolute'>
                    {/* Red Square  */}
                    <div className='bg-red-600 h-11 w-11 sm:h-12 sm:w-12 md:h-16 md:w-16 absolute top-5 -left-2'></div>
                    <h2 className='text-2xl sm:text-4xl md:text-6xl font-bold mt-10 mb-10 ml-5 relative'>About Us</h2>
                    </div>
                <div className='mt-24 md:mt-32 lg:mt-40'>
                <p className='mb-4 ml-5 text-base sm:text-lg md:text-2xl'>
                    At Solaris Pictures we believe in the transformative power of storytelling.
                </p>
                <p className='mb-6 ml-5 text-base sm:text-lg md:text-2xl'>
                    Our Mission is to amplify LGBTQ+ voices and experiences through the art of film,
                    creating a platform where every narrative is celebrated and every identity is
                    honored.
                </p>
                <p className='mb-6 ml-5 text-base sm:text-lg md:text-2xl'>
                    We are a collective of passionate filmmakers, writers, and artists dedicated to
                    exploring the diverse tapestry of LGBTQ+ lives.
                </p>
                <button className='text-base sm:text-lg md:text-2xl bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 w-40 ml-5'>
                    Read More
                </button>
                </div>
            </div>

            <div className='md:w-1/2 flex justify-center md:justify-items-center'>
                <div className='relative'>
                    <div className='text-[150px] sm:text-[200px] 
                        md:text-[250px] lg:text-[300px] xl:text-[350px]
                        font-bold md:transition-transform 
                        md:duration-300 md:ease-in-out md:hover:scale-110' 
                        style={{
                        backgroundImage:'url("src/assets/about.jpg")',
                        backgroundSize: 'cover', 
                        backgroundClip: 'text', 
                        color:'transparent'}}>
                            28
                    </div>
                    <div className='bg-red-600 w-full text-white
                    text-base sm:text-lg md:text-2xl text-center rounded-lg
                    -mt-8 sm:-mt-12 md:-mt-16 xl:-mt-20'>
                        Years of Experience
                    </div>
                </div>
            </div>
        </section>
    )
}