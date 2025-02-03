import React from "react";
import Item from "./item";

const ItemsSection = ({items}) => {
  return (
    <section className="portfolio-wrapper py-10 bg-gray-100 w-full mx-40 rounded-2xl">
      <div className="container mx-auto px-6">
        <div className="portfolio-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <Item key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ItemsSection;
