import React, { useState } from 'react';
import Footer from '../components/footer';
import Banner from '../components/banner';
import ServiceSection from '../components/section_service';
import ItemsSection from '../components/section_item';
import Pagination from '../components/pagination';

import pp1 from '../assets/slides/PPT_TINH_DAU_THONG_DO.png';
import pp2 from '../assets/slides/PPT_LANDMARK81.png';
import pp3 from '../assets/slides/PPT_BASE.png';
import pp4 from '../assets/slides/PPT_AEON.png';
import pp5 from '../assets/slides/PPT_BAO_CAO_TONG_KET_CONG_TY_BIA.png';
import pp6 from '../assets/slides/PPT_MINIGAME_TET_2025.png';
import pp7 from '../assets/slides/PPT_PHAN_bIEN_Y_KIEN.png';
import pp8 from '../assets/slides/PPT_SIEU_AM.png';
import pp9 from '../assets/slides/PPT_XU_HUONG_CONG_NGHE.png';
import pp10 from '../assets/slides/PPT_TONG_KET_KINH_DOANH_TIENG_TRUNG.png';
import pp11 from '../assets/slides/PPT_TAI_THIE_NHA_HANG.png';
import pp12 from '../assets/slides/PPT_BASE.png';

const Home = () => {
    //list 1
    const items = [
        {
          image: pp1,
          title: "Slide Tinh Dầu Thông Đỏ",
          price: "40.000",
          link: "#",
        },
        {
          image: pp2,
          title: "Slide LandMark81",
          price: "35.000",
          link: "#",
        },
        {
          image: pp3,
          title: "Slide BASE.VN",
          price: "55.000",
          link: "#",
        },
        {
          image: pp4,
          title: "Slide Aeon Future Leader",
          price: "50.000",
          link: "#",
        },
    ];
    //list 2
    const items2 = [
        {
          image: pp5,
          title: "Slide Báo Cáo Tổng Kết",
          price: "40.000",
          link: "#",
        },
        {
          image: pp6,
          title: "Slide Minigame Tết 2025",
          price: "35.000",
          link: "#",
        },
        {
          image: pp7,
          title: "Slide Phản Biện Ý Kiến",
          price: "55.000",
          link: "#",
        },
        {
          image: pp8,
          title: "Slide Siêu Âm",
          price: "50.000",
          link: "#",
        },
    ];
    //list 3
    const items3 = [
        {
          image: pp9,
          title: "Slide Xu Hướng Công Nghệ",
          price: "40.000",
          link: "#",
        },
        {
          image: pp10,
          title: "Slide Tổng Kết Doanh Thu Tiếng Trung",
          price: "35.000",
          link: "#",
        },
        {
          image: pp11,
          title: "Slide Tái Thiết Nhà Hàng",
          price: "55.000",
          link: "#",
        },
        {
          image: pp12,
          title: "Slide Báo Cáo Kinh Doanh",
          price: "50.000",
          link: "#",
        },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    return (
        <div className="w-full h-full scrollbar-hidden overflow-auto">
            {/* Full-screen banner */}
            <Banner currentPage={currentPage} className="w-full"/>

            {/* Service section */}
            <ServiceSection currentPage={currentPage} className="h-auto sm:h-screen overflow-auto"/>

            {/* Portfolio section */}
            <div 
                className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#187ac5] to-[#5daefc] text-white py-20 border-t-4 border-[#0A2A43] overflow-auto"
            >
                <div className="text-center px-4 sm:px-10">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5 relative top-[-40px] sm:top-[-50px]">
                        PowerPoint Portfolio
                    </h2>
                    <div className="portfolio-container flex flex-wrap justify-center gap-5">
                        <ItemsSection items={items} />
                        <ItemsSection items={items2}/>
                        <ItemsSection items={items3}/>
                        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={3}/>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer className="bg-gray-800 text-white py-6"/>
        </div>
    );
};

export default Home;
