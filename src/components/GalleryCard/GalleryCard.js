import React from "react";

import "./GalleryCard.css";

function GalleryCard({ gallery }) {
  return (

    <div className="my-3 border rounded gallery-card-div" dir="rtl">
      <img src={gallery.image} className="gallery-img" variant="top" alt="item" />
      <div className="gallery-detail-div mt-2 pe-2 pb-2">
          <p className="my-p1"><span className="gallery-card-title">عنوان:</span> {gallery.title}</p>
          <p className="my-p2"><span className="gallery-card-title">تاریخ:</span> {gallery.date}</p>
      </div>
    </div>
  );
}

export default GalleryCard;
