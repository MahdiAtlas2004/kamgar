import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import "./Book.css";

function Book({ book }) {
  return (
    <div className="my-3 border rounded card-div" dir="rtl">
      <Link to={`/book/${book._id}`}>
        <img src={book.image} className="book-img" variant="top" alt="item" />
      </Link>

      <div className="detail-div mt-2 pe-2 pb-2">
        <div className="d-flex book-name">
          <p>نام کتاب: &nbsp;</p>
          {book.name}
        </div>
        <div className="d-flex">
          <p>تاریخ انتشار: &nbsp;</p>
          {book.date}
        </div>
        <Link to={`/book/${book._id}`}>
          <Button className="more-btn" size="sm" variant="outline-light p-1">
            مشاهده توضیحات بیشتر
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Book;
