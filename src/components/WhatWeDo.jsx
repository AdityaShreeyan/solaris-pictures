import React from 'react';

export default function WhatWeDo(){
    return(
        <section id="what-we-do" className='py-20 bg-white'>
            <div className='mx-auto px-10 relative'>
                 <div className='absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    {/* Red Square  */}
                    <div className='bg-red-600 h-11 w-11 sm:h-12 sm:w-12 md:h-16 md:w-16 absolute top-5 -left-2'></div>
                    <h2 className='text-2xl sm:text-4xl md:text-6xl font-bold mt-10 sm:mt-9 md:ml-5 mb-10 ml-5 relative whitespace-nowrap'>What We Do?</h2>
                    </div>
                    </div>
                <p className='mt-20 md:mt-28 text-center text-base sm:text-lg md:text-2xl'>
                    Crafting transformative narratives that 
                    celebrate the beauty and 
                </p>
                <p className='text-center text-base sm:text-lg md:text-2xl mb-10'>
                    resilience of the LGBTQ+ experience.
                </p>
                <div className='mx-auto px-10 relative'>
            {/* Cards Section */}
                <div className='flex flex-col md:flex-row justify-between space-y-3 
                md:space-y-0 md:space-x-10'>

                    {/* Card 1 */}
                    <div className='flex flex-col items-center p-5 text-center group w-full md:w-1/3'>
                        <div className='relative w-16 h-16 mb-5 trasition-transform transform 
                        group-hover:translate-y-1 md:block hidden'>
                            <svg className="w-16 h-16 text-red-600 group-hover:bg-red-600
                            group-hover:text-white p-2 border-2 rounded-full
                            border-red-600 transition-300 ease-in-out" 
                            fill="none" stroke="currentColor" 
                            strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    <h3 className='text-base sm:text-lg md:text-xl font-bold mb-3 
                    group-hover:translate-y-1 transition-transform duration-300'>
                        Creative Conceptions
                    </h3>
                    <p className='text-base sm:text-lg md:text-xl group-hover:translate-y-2 
                    transition-transform duration-300 mb-6'>
                        Transforming bold ideas into captivating visual stories that resonate with audiences.
                    </p>
                    <svg className='mt-auto h-10 w-10 sm:w-14 sm:h-14 md:w-20 md:h-20 group-hover:translate-y-3 transition-transform
                    duration-300' viewBox="0 0 107 107" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M95.6536 24.1463C96.0771 24.7892 96.2659 25.5586 96.1879 26.3246C96.1099 27.0906 95.77 27.8062 95.2256 28.3505L54.2401 69.3315C53.8208 69.7506 53.2977 70.0506 52.7243 70.2009L35.6533 74.6592C35.089 74.8064 34.496 74.8034 33.9333 74.6506C33.3705 74.4978 32.8574 74.2005 32.4451 73.7881C32.0327 73.3757 31.7354 72.8627 31.5825 72.2999C31.4297 71.7371 31.4268 71.1441 31.5739 70.5799L36.0323 53.5134C36.1656 53.0023 36.4107 52.5272 36.7501 52.1224L77.8871 11.0121C78.5141 10.3859 79.3639 10.0342 80.25 10.0342C81.1361 10.0342 81.986 10.3859 82.6129 11.0121L95.2256 23.6202C95.3814 23.7845 95.5245 23.9603 95.6536 24.1463ZM88.1324 25.9832L80.25 18.1053L42.2739 56.0814L39.4875 66.7501L50.1563 63.9637L88.1324 25.9832Z" fill="#FF1B1E"/>
                        <path d="M87.5661 76.5051C88.7847 66.0902 89.1738 55.595 88.7297 45.1184C88.7193 44.8715 88.7602 44.6251 88.85 44.3949C88.9398 44.1646 89.0765 43.9556 89.2514 43.7809L93.6384 39.3939C93.7582 39.2734 93.9104 39.19 94.0765 39.1538C94.2426 39.1177 94.4157 39.1302 94.5748 39.19C94.734 39.2498 94.8725 39.3543 94.9736 39.4909C95.0749 39.6275 95.1344 39.7905 95.1453 39.9601C95.9687 52.4045 95.6554 64.8979 94.209 77.2853C93.1569 86.3001 85.9165 93.3665 76.9419 94.3696C61.3615 96.0939 45.6384 96.0939 30.0581 94.3696C21.0879 93.3665 13.8431 86.3001 12.7909 77.2853C10.9457 61.4822 10.9457 45.518 12.7909 29.7149C13.8431 20.7001 21.0834 13.6337 30.0581 12.6306C41.8836 11.3245 53.7974 11.0068 65.6757 11.6809C65.8457 11.6931 66.0086 11.7538 66.1452 11.8558C66.2818 11.9577 66.3863 12.0966 66.4463 12.2561C66.5064 12.4156 66.5194 12.589 66.484 12.7557C66.4486 12.9224 66.3661 13.0755 66.2464 13.1968L61.8192 17.6194C61.6462 17.7926 61.4393 17.9283 61.2115 18.0181C60.9837 18.1078 60.7398 18.1497 60.4951 18.1411C50.5831 17.8016 40.6596 18.1815 30.8026 19.2779C27.9223 19.5967 25.2335 20.8772 23.1706 22.9126C21.1078 24.9479 19.7913 27.6193 19.4339 30.4951C17.6454 45.7796 17.6454 61.2206 19.4339 76.5051C19.7913 79.3809 21.1078 82.0522 23.1706 84.0876C25.2335 86.123 27.9223 87.4035 30.8026 87.7223C45.7603 89.3941 61.2396 89.3941 76.2018 87.7223C79.0822 87.4035 81.7709 86.123 83.8338 84.0876C85.8966 82.0522 87.2087 79.3809 87.5661 76.5051Z" fill="#FF1B1E"/>
                    </svg>         
                    </div>

                    {/* Card 2 */}
                    <div className='flex flex-col items-center p-5 text-center group w-full md:w-1/3'>
                        <div className='relative w-16 h-16 mb-5 trasition-transform transform 
                        group-hover:translate-y-1 md:block hidden'>
                            <svg className="w-16 h-16 text-red-600 group-hover:bg-red-600
                            group-hover:text-white p-2 border-2 rounded-full
                            border-red-600 transition-300 ease-in-out" fill="none" stroke="currentColor" 
                            strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    <h3 className='text-base sm:text-lg md:text-xl font-bold mb-3 
                    group-hover:translate-y-1 transition-transform duration-300'>
                        Shooting & Editing
                    </h3>
                    <p className='text-base sm:text-lg md:text-xl group-hover:translate-y-2 
                    transition-transform duration-300 mb-6'>
                    With an eye for detail and a keen sense of cinematic artistry, 
                    our team brings stories to life.
                    </p>
                    <svg className='mt-auto h-10 w-10 sm:w-14 sm:h-14 md:w-24 md:h-24 group-hover:translate-y-3 transition-transform
                    duration-300' viewBox="0 0 107 107" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.4062 20.0625C18.9722 20.0625 14.7197 21.8239 11.5843 24.9593C8.44893 28.0947 6.6875 32.3472 6.6875 36.7812V70.2188C6.6875 74.6528 8.44893 78.9053 11.5843 82.0407C14.7197 85.1761 18.9722 86.9375 23.4062 86.9375H56.8438C61.2778 86.9375 65.5303 85.1761 68.6657 82.0407C71.8011 78.9053 73.5625 74.6528 73.5625 70.2188V69.3694L87.1716 78.7654C88.4259 79.631 89.8929 80.1373 91.4141 80.2294C92.9353 80.3216 94.4528 79.9962 95.8024 79.2883C97.1521 78.5804 98.2825 77.5171 99.0715 76.2132C99.8605 74.9094 100.278 73.4146 100.279 71.8906V35.1227C100.278 33.5987 99.8605 32.104 99.0715 30.8001C98.2825 29.4963 97.1521 28.4329 95.8024 27.7251C94.4528 27.0172 92.9353 26.6918 91.4141 26.7839C89.8929 26.8761 88.4259 27.3824 87.1716 28.248L73.5625 37.6439V36.7812C73.5625 32.3472 71.8011 28.0947 68.6657 24.9593C65.5303 21.8239 61.2778 20.0625 56.8438 20.0625H23.4062ZM73.5625 45.7692L90.9768 33.7451C91.2278 33.5719 91.5215 33.4706 91.8259 33.4523C92.1304 33.4339 92.4341 33.4993 92.7041 33.6412C92.9741 33.7831 93.2002 33.9961 93.3578 34.2573C93.5154 34.5184 93.5985 34.8177 93.5983 35.1227V71.8906C93.5973 72.1951 93.5133 72.4935 93.3552 72.7537C93.1971 73.0139 92.971 73.226 92.7012 73.3671C92.4314 73.5082 92.1282 73.5729 91.8243 73.5543C91.5204 73.5357 91.2273 73.4345 90.9768 73.2616L73.5625 61.2441V45.7692ZM13.375 36.7812C13.375 34.1208 14.4319 31.5693 16.3131 29.6881C18.1943 27.8069 20.7458 26.75 23.4062 26.75H56.8438C59.5042 26.75 62.0557 27.8069 63.9369 29.6881C65.8181 31.5693 66.875 34.1208 66.875 36.7812V70.2188C66.875 72.8792 65.8181 75.4307 63.9369 77.3119C62.0557 79.1931 59.5042 80.25 56.8438 80.25H23.4062C20.7458 80.25 18.1943 79.1931 16.3131 77.3119C14.4319 75.4307 13.375 72.8792 13.375 70.2188V36.7812Z" fill="#FF1B1E"/>
                    </svg>

                    </div>

                   {/*  Card 3 */}
                    <div className='flex flex-col items-center p-5 text-center group w-full md:w-1/3'>
                        <div className='relative w-16 h-16 mb-5 trasition-transform transform 
                        group-hover:translate-y-1 md:block hidden'>
                            <svg className="w-16 h-16 text-red-600 group-hover:bg-red-600
                            group-hover:text-white p-2 border-2 rounded-full
                            border-red-600 transition-300 ease-in-out" fill="none" stroke="currentColor" 
                            strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    <h3 className='text-base sm:text-lg md:text-xl font-bold mb-3 
                    group-hover:translate-y-1 transition-transform duration-300'>
                        Line Production
                    </h3>
                    <p className='text-base sm:text-lg md:text-xl group-hover:translate-y-2 
                    transition-transform duration-300 mb-6'>
                        Whatever your requirements are, we have the 
                        experience to execute your film project in the best way.
                    </p>
                    <svg className='mt-auto h-8 w-8 sm:w-10 sm:h-10 md:w-16 md:h-16 group-hover:translate-y-3 transition-transform
                    duration-300' viewBox="0 0 90 89" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.99257 72.6767L16.368 66.3013C12.4288 61.2843 9.9318 55.2884 9.14548 48.9584H0.139648C1.03132 57.9197 4.59798 66.0784 9.99257 72.6767ZM22.6542 16.368C27.6918 12.435 33.7002 9.93926 40.0417 9.14548V0.139648C31.0805 1.03132 22.9217 4.59798 16.3234 9.99257L22.6542 16.368ZM0.139648 40.0417H9.14548C9.94798 33.5326 12.5338 27.603 16.368 22.6542L9.99257 16.3234C4.44133 23.085 1.01332 31.337 0.139648 40.0417ZM49.1813 0.139648V9.14548C66.658 11.4638 80.1667 26.4438 80.1667 44.5001C80.1667 62.5563 66.658 77.5363 49.1813 79.8547V88.8605C71.6067 86.4976 89.0834 67.5051 89.0834 44.5001C89.0834 21.4951 71.6067 2.50257 49.1813 0.139648ZM62.3334 44.5001L49.1813 34.6471L35.5834 24.4376V64.5626L49.1813 54.353L62.3334 44.5001ZM16.3234 79.0076C23.0919 84.5473 31.3403 87.9739 40.0417 88.8605V79.8547C33.7002 79.0609 27.6918 76.5651 22.6542 72.6321L16.3234 79.0076Z" fill="#FF1B1E"/>
                    </svg>

                    </div>
                </div>
            </div>
        </section>
    )
}