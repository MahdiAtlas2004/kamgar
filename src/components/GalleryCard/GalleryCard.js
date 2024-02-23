import React, { useState, useEffect } from "react";
import "./GalleryCard.css";

function GalleryCard({ gallery }) {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showPopup) {
        setShowPopup(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showPopup]);

  const togglePopup = (event) => {
    event.stopPropagation();
    setShowPopup(!showPopup);
  };

  const closePopup = (event) => {
    event.stopPropagation();
    setShowPopup(false);
  };

  return (
    <div className="my-3 border rounded gallery-card-div" dir="rtl">
      <img
        src={gallery.image}
        className="gallery-img"
        variant="top"
        alt="item"
        onClick={togglePopup}
      />
      {showPopup && (
        <div className="popup" onClick={closePopup}>
          <img
            src={gallery.image}
            alt="popup"
            className="popup-img"
            onClick={(event) => event.stopPropagation()}
          />
          <button className="close-btn-popup" onClick={closePopup}>
            &times;
          </button>
        </div>
      )}
      <div className="gallery-detail-div mt-2 pe-2 pb-2">
        <p className="my-p1">
          <span className="gallery-card-title">عنوان:</span> {gallery.title}
        </p>
        <p className="my-p2">
          <span className="gallery-card-title">تاریخ:</span> {gallery.date}
        </p>
      </div>
    </div>
  );
}

export default GalleryCard;
