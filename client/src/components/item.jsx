import React from "react";

const Item = ({ image, title, price, link }) => {
  return (
    <div className="portfolio-item flex flex-col items-start bg-white p-4 rounded-lg shadow-lg text-left transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl max-w-xs">
      {/* Hình ảnh */}
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />
      
      {/* Tiêu đề */}
      <h3 className="text-lg font-semibold text-gray-800 mb-2 pl-2">{title}</h3>
      
      {/* Giá */}
      <p className="relative pb-2 text-red-600 font-bold mb-3 pl-2">
        {price}
        {/* Chữ "đ" có gạch chân và nằm dưới giá */}
        <span className="underline absolute bottom-3 text-sm font-semibold">đ</span>
      </p>
      
      {/* Nút xem chi tiết */}
      <a href={link} className="text-blue-600 font-bold text-sm pl-2 hover:text-yellow-400 transition">
        Bấm để xem chi tiết
      </a>
    </div>
  );
};

export default Item;
