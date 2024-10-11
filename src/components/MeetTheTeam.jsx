import React from 'react'

export default function MeetTheTeam(){
    const team = [
        { id: 1, name: 'Saagar Gupta', imageUrl:'src/assets/Saagar.jpeg',
        overlayText:(
            <div className='text-center'>
                <p className='text-lg md:text-xl font-bold mb-2'>
                    SAAGAR GUPTA
                </p>
                <p className='text-base md:text-lg'> A <strong>media professional</strong> and a
                <strong> reputed screenwriter, lyricist</strong> and <strong>producer</strong> with credits in Darmiyaan, Evening
                Shadows and Kuch Sapney Apne.
                </p>
            </div>
        )
        },
        { id:2, name:'Sridhar Rangayan', imageUrl:'src/assets/Sridhar.jpeg',
        overlayText:(
            <div className='text-center'>
                <p className='text-lg md:text-xl font-bold mb-2'>
                    SRIDHAR RANGAYAN
                </p>
                <p className='text-base md:text-lg'> A national award winning <strong>editor, director, writer </strong>
                    and <strong>producer</strong> with several award winning films.
                </p>
            </div>
        )
        }
    ]

    return(
    <section id="meet-the-team" className="p-10">
    <div className='mx-auto px-10 relative'>
                 <div className='absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    {/* Red Square  */}
                    <div className='bg-red-600 h-11 w-11 sm:h-12 sm:w-12 md:h-16 md:w-16 absolute top-5 -left-2'></div>
                    <h2 className='text-2xl sm:text-4xl md:text-6xl font-bold mt-10 sm:mt-9 md:mt-8 ml-4 mb-10 relative whitespace-nowrap'>Meet The Team</h2>
                    </div>
                    </div>
                <p className='mt-20 md:mt-28 text-center text-base sm:text-lg md:text-2xl'>
                   Meet the creative duo behind Solaris Pictures, who are passionate filmmakers,
                </p>
                <p className='text-center text-base sm:text-lg md:text-2xl mb-10'>
                    artists, and storytellers dedicated to crafting authentic narratives.
                </p>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {team.map(member => (
            <div key={member.id} className='relative group flex flex-col items-center
            overflow-hidden'>
                <img src={member.imageUrl}
                alt={member.name}
                className='w-full h-auto max-w-[260px] max-h-[320px] md:max-w-[360px] md:max-h-[420px] object-cover md:transition-transform md:duration-300
                md:group-hover:translate-y-3 mb-8 md:mb-0' />
                <h3 className='text-2xl font-bold text-center mt-4 md:group-hover:opacity-0
                md:transition-opacity md:block hidden md:duration-300'>{member.name}</h3>
                <p className='md:hidden block max-w-[260px]'>{member.overlayText}</p>
                <div className='absolute left-25 top-3 w-[360px] h-[420px] bg-white bg-opacity-50 flex items-center
                justify-center opacity-0 md:group-hover:opacity-100 transition-opacity
                duration-300'>
                    <div className='p-4'>
                        {member.overlayText}
                    </div>
                </div>
            </div>
        ))}
    </div>
</section>
    );
}
    