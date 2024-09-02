import React from "react";
import { Link } from "react-router-dom";

const Card = ({ imagePath, title, link }) => {
  return (
    <Link to={link}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white transition-transform duration-300 ease-in-out transform hover:scale-105">
        {/* Image Section */}
        <div className="relative h-40">
          <img
            className="object-cover w-full h-full"
            src={imagePath}
            alt={title}
          />
        </div>
        {/* Title Section */}
        <div className="bg-festival-500 text-zinc-300 px-6 py-4">
          <div className="font-bold text-xl">{title}</div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
