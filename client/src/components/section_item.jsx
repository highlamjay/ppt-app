import React from "react";
import Item from "./item";

const ItemsSection = ({ items }) => {
  return (
    <div className="portfolio-wrapper py-12 bg-gray-100 w-full mx-4 sm:mx-6 md:mx-12 lg:mx-27 rounded-2xl">
      <div className="container mx-auto px-8">
        <div className="portfolio-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <Item key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemsSection;
