import React from "react";
import { Link } from "react-router-dom";

const SingleBook = ({ book }) => {
  const { title, image, price, subtitle, url, isbn13 } = book;
  return (
    <Link to={`/book/${isbn13}`}>
      <div className="shadow-sm hover:shadow-xl relative rounded overflow-hidden transition duration-500 transform hover:-translate-y-2">
        <img
          className="object-cover w-full h-56 md:h-64 xl:h-80"
          src={image}
          alt=""
        />

        <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 hover:opacity-100 duration-500 text-gray-300 flex flex-col py-8 px-4">
          <h3 className="text-xl font-bold">{title}</h3>
          <p>{subtitle.substring(0, 45)}...</p>
          <p className="mt-auto font-bold">Price: {price}</p>
        </div>
      </div>
    </Link>
  );
};

export default SingleBook;
