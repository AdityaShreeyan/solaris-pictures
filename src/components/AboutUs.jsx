import React from 'react';
import { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function AboutUs(){
    const [rotation,setRotation] = useState(0);
    const [centerSlice,setCenterSlice] = useState(0);


    const handleClick = () => {
        setRotation((prevRotation) => prevRotation + 45);
        setCenterSlice((prevSlice) => (prevSlice + 1) % 8);
    };

    

    return(
        <>
        <Navbar />
        <section
            className="relative md:h-screen sm:h-[500px] h-[450px] bg-cover bg-center
            flex justify-center items-center"
            style={{
            backgroundImage: "url('src/assets/about-us-hero.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            }}
        >  
            <h1 className='text-2xl sm:text-4xl md:text-6xl font-bold text-white'>ABOUT US</h1>
        </section>
        <div className='flex flex-row justify-center items-start px-16 py-12 bg-pink-200'>
        <div className='relative w-1/3 overflow-hidden'>
            <svg className='w-full h-full tranisiton-transform duration-500 ease-out' viewBox="0 0 1306 1292" fill="none" xmlns="http://www.w3.org/2000/svg"
            style={{transform:`rotate(${rotation}deg)`,rotation}}
            onClick={handleClick}>  

                {/* First Middle Image - Logo */}
                <path className={`transition-transform duration-300 ease-out -translate-x-6 ${centerSlice === 0 ? 'translate-x-16' : ''}`} d="M1125.24 827.593C1168.63 715.667 1171.17 587.74 1122.95 467.974L853.477 580.843C870.648 626.178 870.011 674.163 854.831 716.832L1125.24 827.593Z" fill="#dc2626"/>
            
                {/* Second Image */}
                <path className={`transition-transform duration-300 ease-out ${centerSlice === 1 ? 'translate-x-14 -translate-y-14' : ''}`} d="M818.922 565.495C798.208 522.077 763.398 489.45 722.35 470.833L833.091 200.464C943.291 247.536 1036.43 334.863 1088.46 452.598L818.922 565.495Z" fill="#dc2626"/>
            
                {/* Third Image */}
                <path className={`transition-transform duration-300 ease-out ${centerSlice === 2 ? '-translate-y-20' : ''}`} d="M459.305 198.955C578.697 151.277 706.107 153.949 817.63 197.181L706.87 467.595C664.61 452.562 617.135 451.793 572.186 468.461L459.305 198.955Z" fill="#dc2626"/>

                {/* Fourth Image */}
                <path className={`transition-transform duration-300 ease-out ${centerSlice === 3 ? '-translate-x-11 -translate-y-11' : ''}`} d="M443.84 202.346C326.107 253.987 238.633 346.662 191.209 456.468L461.624 567.229C480.555 526.566 513.311 492.193 556.722 471.852L443.84 202.346Z" fill="#dc2626"/>
            
                {/* Fifth Image */}
                <path className={`transition-transform duration-300 ease-out ${centerSlice === 4 ? '-translate-x-16' : ''}`} d="M454.939 717.872C438.528 672.652 439.695 624.956 455.223 582.642L184.854 471.9C141.095 583.457 137.995 711.093 185.398 830.768L454.939 717.872Z" fill="#dc2626"/>
            
                {/* Sixth Image */}
                <path className={`transition-transform duration-300 ease-out ${centerSlice === 5 ? '-translate-x-11 translate-y-11' : ''}`} d="M446.487 1100.09C336.284 1052.49 243.336 964.557 191.805 846.18L461.282 733.311C481.545 777.35 516.19 810.558 557.247 829.672L446.487 1100.09Z" fill="#dc2626"/>
            
                {/* Seventh Image */}
                <path className={`transition-transform duration-300 ease-out ${centerSlice === 6 ? 'translate-y-16' : ''}`} d="M572.662 836.075C615.384 851.751 663.591 852.79 709.197 835.878L822.079 1105.38C702.032 1153.32 573.879 1150.36 461.92 1106.44L572.662 836.075Z" fill="#dc2626"/>
        
                {/* Eigth Image (Last) */}
                <path className={`transition-transform duration-300 ease-out ${centerSlice === 7 ? 'translate-x-16 translate-y-16' : ''}`} d="M820.578 732.311C801.781 773.754 768.704 808.838 724.658 829.477L837.54 1098.98C955.918 1047.06 1043.71 953.649 1090.95 843.053L820.578 732.311Z" fill="#dc2626"/>
            </svg>
        </div>

            <div className='w-2/3 text-left space-y-4'>
            <p className="text-3xl font-bold">Solaris Pictures</p>
                    <p className="text-2xl">
                        Solaris Pictures is the only Indian production house that has been consistently producing, exhibiting, and distributing Indian LGBTQ+ content.
                    </p>
                    <p className="text-2xl">
                        Started in 2001, as a partnership firm between Sridhar Rangayan and Saagar Gupta, who had earlier worked on several television shows as directors, writers, and producers.
                    </p>
                    <p className="text-2xl">
                        The company was created with the sole aim of creating positive representations of LGBTQ+ characters, mirroring the lived realities, instead of stereotypical or caricaturish portrayals that were prevalent in Indian mainstream cinema.
                    </p>
            </div>
    </div>
        
        {/* <defs>
        <pattern id="img1" patternUnits="userSpaceOnUse" width="850" height="700">
        <image href="src/assets/yours-emotionally.jpeg" x="0" y="0" width="1500" height="700" />
        </pattern>
        <pattern id="img2" patternUnits="userSpaceOnUse" width="1200" height="300">
        <image href="src/assets/the-pink-mirror.jpeg" x="0" y="0" width="1500" height="700" />
        </pattern>
        <pattern id="img3" patternUnits="userSpaceOnUse" width="1500" height="700">
        <image href="src/assets/kuch-sapney-apne.png" x="0" y="0" width="2000" height="600" />
        </pattern>
        <pattern id="img4" patternUnits="userSpaceOnUse" width="1500" height="700">
        <image href="src/assets/the-beginning.png" x="0" y="0" width="1500" height="700" />
        </pattern>
        <pattern id="img5" patternUnits="userSpaceOnUse" width="1500" height="700">
        <image href="src/assets/the-bucket-list.png" x="0" y="0" width="1500" height="700" />
        </pattern>
        <pattern id="img6" patternUnits="userSpaceOnUse" width="1500" height="700">
        <image href="src/assets/way-to-go.png" x="0" y="0" width="1500" height="700" />
        </pattern>
        <pattern id="img7" patternUnits="userSpaceOnUse" width="1300" height="700">
        <image href="src/assets/evening-shadows.jpeg" x="0" y="0" width="1500" height="700" />
        </pattern>
        <pattern id="img8" patternUnits="userSpaceOnUse" width="1500" height="700">
        <image href="src/assets/Solaris-Pictures_Logo 1.png" x="0" y="0" width="1500" height="700" />
        </pattern>
        </defs>
        <path d="M459.305 198.955C578.697 151.277 706.107 153.949 817.63 197.181L706.87 467.595C664.61 452.562 617.135 451.793 572.186 468.461L459.305 198.955Z" fill="url('#img1')"/>
        <path d="M818.922 565.495C798.208 522.077 763.398 489.45 722.35 470.833L833.091 200.464C943.291 247.536 1036.43 334.863 1088.46 452.598L818.922 565.495Z" fill="url('#img2')"/>
        <path d="M1125.24 827.593C1168.63 715.667 1171.17 587.74 1122.95 467.974L853.477 580.843C870.648 626.178 870.011 674.163 854.831 716.832L1125.24 827.593Z" fill="url('#img8')"/>
        <path d="M820.578 732.311C801.781 773.754 768.704 808.838 724.658 829.477L837.54 1098.98C955.918 1047.06 1043.71 953.649 1090.95 843.053L820.578 732.311Z" fill="url('#img3')"/>
        <path d="M443.84 202.346C326.107 253.987 238.633 346.662 191.209 456.468L461.624 567.229C480.555 526.566 513.311 492.193 556.722 471.852L443.84 202.346Z" fill="url('#img4')"/>
        <path d="M454.939 717.872C438.528 672.652 439.695 624.956 455.223 582.642L184.854 471.9C141.095 583.457 137.995 711.093 185.398 830.768L454.939 717.872Z" fill="url('#img5')"/>
        <path d="M446.487 1100.09C336.284 1052.49 243.336 964.557 191.805 846.18L461.282 733.311C481.545 777.35 516.19 810.558 557.247 829.672L446.487 1100.09Z" fill="url('#img6')"/>
        <path d="M572.662 836.075C615.384 851.751 663.591 852.79 709.197 835.878L822.079 1105.38C702.032 1153.32 573.879 1150.36 461.92 1106.44L572.662 836.075Z" fill="url('#img7')"/> */}
        
        <Footer />
        </>
    );
};