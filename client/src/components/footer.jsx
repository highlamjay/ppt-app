import social from "../assets/images/social (1).png";
import mail from "../assets/images/mail.png";
import video from "../assets/images/video.png";
import logo from '../assets/images/EngiSlide_PNG05.png'

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-[#0A2A43] to-[#02172E] scrollbar-hidden text-white py-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-col sm:flex-row justify-between">
                    {/* Cột trái */}
                    <div className="flex flex-row items-center space-x-2 mb-8 sm:mb-0 justify-center">
                        <img src={logo} className="w-10 h-10"></img>
                        <h1 className="text-2xl sm:text-4xl font-light mb-1">
                            Engi
                            <strong className="font-semibold">Slide</strong>
                        </h1>
                    </div>

                    {/* Cột phải */}
                    <div className="flex flex-col items-start space-y-4 sm:pr-60">
                        <h3 className="text-2xl">LIÊN HỆ</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center space-x-3">
                                <img src={social} alt="Facebook" className="w-6 h-6" />
                                <a href="https://www.facebook.com/tran.huu.nghia.65375/" target="_blank" rel="noopener noreferrer" className="text-base hover:text-[#5daefc]">
                                    Facebook
                                </a>
                            </li>
                            <li className="flex items-center space-x-3">
                                <img src={mail} alt="Email" className="w-6 h-6" />
                                <a href="mailto:tranhuunghia10022021@gmail.com" className="text-base hover:text-[#5daefc]">
                                    tranhuunghia10022021@gmail.com
                                </a>
                            </li>
                            <li className="flex items-center space-x-3">
                                <img src={video} alt="TikTok" className="w-6 h-6" />
                                <a href="#" className="text-base hover:text-[#5daefc]">
                                    kysu_pptx
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Dòng bản quyền */}
            <div className="border-t border-white/20 mt-12 pt-2 text-center text-sm">
                &copy; 2025 Kỹ Sư PowerPoint. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
