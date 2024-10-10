import React from 'react'

export default function MeetTheTeam(){
    const team = [
        { id: 1, name: 'Saagar Gupta', imageUrl:'src/assets/Saagar.jpeg',
        overlayText:(
            <div className='text-center'>
                <p className='text-2xl font-bold mb-2'>
                    SAAGAR GUPTA
                </p>
                <p className='text-xl'> A <strong>media professional</strong> and a
                <strong> reputed screenwriter, lyricist</strong> and <strong>producer</strong> with credits in Darmiyaan, Evening
                Shadows and Kuch Sapney Apne.
                </p>
            </div>
        )
        },
        { id:2, name:'Sridhar Rangayan', imageUrl:'src/assets/Sridhar.jpeg',
        overlayText:(
            <div className='text-center'>
                <p className='text-2xl font-bold mb-2'>
                    SRIDHAR RANGAYAN
                </p>
                <p className='text-xl'> A national award winning <strong>editor, director, writer </strong>
                    and <strong>producer</strong> with several award winning films.
                </p>
            </div>
        )
        }
    ]

    return(
    <section id="meet-the-team" className="p-10">
    <div className='flex justify-center relative mb-10 mt-14'>
                  <div className='bg-red-600 w-16 h-16 md:absolute -top-5 left-96'>

                  </div>
                  <h2 className='text-6xl font-bold md:relative z-10 left-10'>
                      Meet The Team
                  </h2>
              </div>
              <p className='text-center text-2xl'>
                  Meet the creative duo behind Solaris Pictures, who are 
                  passionate filmmakers,
              <p className='text-center text-2xl mb-10'>
                  artists and storytellers dedicated to crafting authentic narratives.
              </p>
              </p>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {team.map(member => (
            <div key={member.id} className='relative group flex flex-col items-center
            overflow-hidden'>
                <img src={member.imageUrl}
                alt={member.name}
                className='w-[360px] h-[420px] object-cover transition-transform duration-300
                group-hover:translate-y-3' />
                <h3 className='text-2xl font-bold text-center mt-4 group-hover:opacity-0
                transition-opacity duration-300'>{member.name}</h3>
                <div className='absolute left-25 top-3 w-[360px] h-[420px] bg-white bg-opacity-50 flex items-center
                justify-center opacity-0 group-hover:opacity-100 transition-opacity
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
    