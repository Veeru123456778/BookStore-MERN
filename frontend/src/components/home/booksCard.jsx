import React from "react";
import BooksSingleCard from "./booksSingleCard";

function BookCard({ books }) {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-1">
      {books.map((book) => (
        <div className="col-md-3 mb-4" key={book._id}>
        <BooksSingleCard key={book._id} book={book} />
        </div>
      ))}
    </div>
  );
}

export default BookCard;
