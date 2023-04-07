import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import SingleBook from "../SingleBook/SingleBook";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const Books = () => {
  const navigation = useNavigation();
  // console.log(navigation.state);
  if (navigation.state === "loading") {
    return <LoadingSpinner/>
  }
  const { books } = useLoaderData();
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8 my-container">
      {books.map((book) => (
        <SingleBook key={book.isbn13} book={book} />
      ))}
    </div>
  );
};

export default Books;
