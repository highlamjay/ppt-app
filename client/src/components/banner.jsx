import React from 'react';
import banner from '../assets/images/pexels-sevenstormphotography-443383.jpg';
import person from '../assets/images/person.png';
import logo from '../assets/images/EngiSlide_PNG07.png';

const Banner = ({currentPage}) => {
    return (
        <header className="sm:h-[800px] md:h-[600px] lg:h-[600px] scrollbar-hidden relative bg-cover bg-center bg-fixed py-20" 
            style={{ backgroundImage: `url(${banner})` }}>
            
            {/* Background Overlay */}
            <div className="absolute inset-0" style={{ 
                background: 'radial-gradient(circle, rgba(0, 50, 150, 0.8) 10%, rgba(0, 50, 150, 0.6) 40%, rgba(0, 50, 150, 0.4) 70%, rgba(0, 50, 150, 0.2) 100%)' 
            }}></div>
            
            {/* Logo */}
            <div className="absolute top-10 left-10 z-30">
                <img 
                    src={logo} 
                    alt="EngiSlide Logo" 
                    className="w-auto h-15 sm:w-auto sm:h-15 max-w-full max-h-full object-cover"
                />
            </div>


            {/* Content Container */}
            <div className="container mx-auto flex flex-col-reverse sm:flex-row justify-between items-center relative z-10 px-6">
                
                {/* Left Text */}
                <div className="text-white pt-20 sm:pt-25 text-center sm:text-left order-2 sm:order-1">
                    <h1 className="text-3xl sm:text-5xl md:text-6xl font-light mb-3 sm:mb-4">
                        Engi
                        <strong className="font-semibold">Slide</strong>
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl font-light mb-5 sm:mb-4">
                        EngiSlide - Dịch vụ thiết kế PowerPoint chuyên nghiệp,
                        <br /> mang đến cho bạn giải pháp ấn tượng và hiệu quả cho bài thuyết trình.
                    </p>
                    <button 
                        className="bg-gradient-to-r from-purple-600 via-blue-500 to-teal-400 text-white py-3 px-8 text-xl font-bold rounded-full shadow-lg hover:scale-105 transition-all duration-300 ease-in-out mt-6 cursor-pointer">
                            Khám phá
                    </button>
                </div>
                
               {/* Right Section (Image & Background Shape) */}
                {currentPage === 1 && (
                    <div className="relative w-full sm:w-auto flex flex-col items-center sm:items-end mt-10 sm:mt-0 order-1 sm:order-2 sm:absolute sm:top-10 sm:right-10 lg:top-0 lg:right-10">
                        
                        {/* Circular Background */}
                        <div className="absolute sm:relative w-[250px] sm:w-[500px] lg:w-[600px] h-[250px] sm:h-[500px] lg:h-[600px] rounded-full z-0 lg:translate-y-0 lg:translate-x-10 translate-y-15"
                            style={{
                                background: 'radial-gradient(circle, rgba(255, 255, 255, 0.9) 20%, rgba(200, 200, 255, 0.5) 60%, rgba(150, 150, 255, 0.2) 100%)',
                            }}>
                        </div>

                        {/* Person Image */}
                        <img 
                            src={person} 
                            alt="Person with Laptop" 
                            className="relative sm:absolute sm:bottom-5 lg:top-30 lg:left-20 sm:right-0 w-[300px] sm:w-[600px] lg:w-[700px] z-20 filter drop-shadow-lg  lg:translate-y-0 translate-y-20 translate-x-10" 
                        />
                    </div>
                )}

            </div>
        </header>
    );
};

export default Banner;
