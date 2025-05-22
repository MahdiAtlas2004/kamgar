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
          <p className="name">نام کتاب: &nbsp; <span className="text-white">{book.name}</span></p>
        </div>
        <div className={`d-flex ${book._id == 9 || book._id == 10 || book._id == 11 ? 'mt-3' : ''}`}>
          <p className="date">تاریخ انتشار: &nbsp;</p>
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
