import React from "react";
import band from "../assets/images/EngiSlide_JPG01.jpg";

const Item = ({ image, title, price, link }) => {
  return (
    <div className="relative portfolio-item flex flex-col items-start bg-white rounded-xl shadow-lg text-left transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl max-w-sm overflow-hidden">
      
      {/* Hình Band - Góc trái phía trên */}
      <img 
        src={band} 
        alt="EngiSlide" 
        className="absolute top-0 left-3 w-16 h-8 object-fill rounded-b-lg"
      />
      
      {/* Hình ảnh sản phẩm */}
      <img 
        src={image} 
        alt={title} 
        className="w-full h-56 object-cover rounded-lg-tl rounded-lg-tr mb-4"
      />

      {/* Tiêu đề (giới hạn 2 dòng) */}
      <h3 className="text-xl font-semibold text-gray-800 mb-2 pl-3 line-clamp-2">{title}</h3>
      
      {/* Phần thân của item */}
      <div className="flex flex-col justify-between flex-grow-0 flex-shrink-0 w-full">
        {/* Giá */}
        <p className="relative pb-2 text-red-600 font-bold text-lg mb-3 pl-3 pr-3">
          {price}
          <span className="underline absolute bottom-4 text-sm font-semibold">đ</span>
        </p>
        
        {/* Nút xem chi tiết */}
        <a href={link} className="text-blue-600 font-bold text-base pl-3 pr-3 mb-4 hover:text-yellow-400 transition">
          Bấm để xem chi tiết
        </a>
      </div>
    </div>
  );
};

export default Item;
