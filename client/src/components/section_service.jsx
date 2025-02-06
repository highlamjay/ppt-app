import customer from '../assets/images/customer.png';
import bank from "../assets/images/piggy-bank.png";
import time from '../assets/images/time.png';

const ServiceSection = ({ currentPage }) => {
    return (
        <section className="service-section bg-gray-100 py-16">
            {currentPage === 1 ? (
                <>
                    {/* Service Section */}
                    <h2 className="text-4xl font-bold text-[#0A2A43] relative bottom-7 mb-4 text-center">
                        My Service
                        <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gray-300 rounded-full" />
                    </h2>
                    <div className="container mx-auto">
                        <div className="flex flex-wrap justify-center items-stretch gap-24">
                            
                            {/* Service Item 1 */}
                            <div className="service-box bg-white p-12 m-4 rounded-lg shadow-lg text-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl flex-1 max-w-xs">
                                <div className="icon-container text-center relative mb-4">
                                    <div className="circle-shape w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4" />
                                    <img src={customer} alt="Customer Icon"
                                        className="service-icon w-12 h-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-2 rounded-full bg-transparent" 
                                    />
                                </div>
                                <h3 className="text-xl font-semibold mb-4">Chất lượng</h3>
                                <p>
                                    Kỹ Sư PowerPoint mang lại sự chuyên nghiệp, ấn tượng, 
                                    giúp bạn truyền đạt thông điệp hiệu quả.
                                </p>
                            </div>

                            {/* Service Item 2 */}
                            <div className="service-box bg-white p-12 m-4 rounded-lg shadow-lg text-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl flex-1 max-w-xs">
                                <div className="icon-container text-center relative mb-4">
                                    <div className="circle-shape w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4" />
                                    <img src={bank} alt="Piggy Bank Icon" className="service-icon w-12 h-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-2 rounded-full bg-transparent"  />
                                </div>
                                <h3 className="text-xl font-semibold mb-4">Giá cả hợp lý</h3>
                                <p>
                                    Dịch vụ thiết kế PowerPoint với mức giá hợp lý, phù hợp với ngân sách và nhu cầu của bạn.
                                </p>
                            </div>

                            {/* Service Item 3 */}
                            <div className="service-box bg-white p-12 m-4 rounded-lg shadow-lg text-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl flex-1 max-w-xs">
                                <div className="icon-container text-center relative mb-4">
                                    <div className="circle-shape w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4" />
                                    <img src={time} alt="Time Icon" className="service-icon w-12 h-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-2 rounded-full bg-transparent"  />
                                </div>
                                <h3 className="text-xl font-semibold mb-4">Hoàn thành đúng hạn</h3>
                                <p>
                                    Cam kết hoàn thành đúng thời gian, giúp bạn yên tâm về tiến độ và chất lượng công việc.
                                </p>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    {/* About Section */}
                    <h2 className="text-4xl font-bold text-[#0A2A43] relative bottom-7 mb-4 text-center">
                        About Us
                        <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gray-300 rounded-full" />
                    </h2>
                    <div className="container mx-auto text-center px-6 max-w-2xl">
                        <p className="text-lg text-gray-700">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. 
                            Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                        </p>
                    </div>
                </>
            )}
        </section>
    );
};

export default ServiceSection;
