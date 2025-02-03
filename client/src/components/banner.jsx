import React from 'react';
import banner from '../assets/images/pexels-sevenstormphotography-443383.jpg';
import user from '../assets/images/user.png';
import person from '../assets/images/person.png';

const Banner = () => {
    return (
        <header className="h-[600px] relative bg-cover bg-center bg-fixed py-20" style={{ backgroundImage: `url(${banner})` }}>
            <div className="container mx-auto flex justify-between items-center relative z-10">
                <div className="text-white pt-12">
                    <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
                            <img src={user} alt="User Icon" className="w-4 h-4" />
                        </div>
                        <p className="text-xl font-light">Trần Hữu Nghĩa</p>
                    </div>
                    <h1 className="text-6xl font-light mb-3">
                        Kỹ Sư <br />
                        <strong className="font-bold">PowerPoint</strong>
                    </h1>
                    <p className="text-lg font-light mb-5">
                        Kỹ Sư PowerPoint - Dịch vụ thiết kế PowerPoint chuyên nghiệp,
                        <br /> mang đến cho bạn giải pháp ấn tượng và hiệu quả cho bài thuyết trình.
                    </p>
                    <button 
                        className="bg-gradient-to-r from-purple-600 via-blue-500 to-teal-400 text-white py-3 px-8 text-xl font-bold rounded-full shadow-lg hover:scale-105 transition-all duration-300 ease-in-out mt-6 cursor-pointer">
                            Khám phá
                    </button>
                </div>
                {/* Adding the circular gradient bubble behind the image */}
                <div
                    className="background-shapes"
                    style={{
                        position: 'absolute',
                        top: '0',
                        right: '180px',
                        width: '600px',
                        height: '600px',
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(255, 255, 255, 0.9) 20%, rgba(200, 200, 255, 0.5) 60%, rgba(150, 150, 255, 0.2) 100%)',
                        zIndex: 10
                    }}>
                </div>

                <div className="absolute top-2 right-0 max-w-3xl z-20">
                    <img src={person} alt="Person with Laptop" className="w-full h-auto filter drop-shadow-lg" />
                </div>
        
            </div>
        </header>
    );
};

export default Banner;
