import React from "react";
import data from "../Data/Data.json"
import "./DJNight.css";

function DJNights() {

  const djData = data.djNights;

  return (
    <div className="dj-page">

      {/* Header Section */}
      <header className="dj-header text-center py-4 shadow-sm">
        <h1 className="display-5 fw-bold dj-title">{djData.headerTitle}</h1>
        <p className="lead">{djData.subTitle}</p>
      </header>

      <main className="container py-5">

        {/* Section Title */}
        <h2 className="section-title">{djData.sectionTitle}</h2>

        {/* Cards */}
        <div className="row g-4 mt-4">
          {djData.cards.map((card, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="card dj-card h-100">
                <img src={card.image} className="card-img-top" alt={card.title} />
                <div className="card-body">
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Section */}
        <div className="video-wrapper mt-5">
          <h2 className="section-title">Watch the Celebration</h2>

          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="ratio ratio-16x9">
                <video controls poster={djData.video.poster}>
                  <source src={djData.video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Info Box */}
              <div className="bg-white p-4 rounded mt-3 shadow-sm">
                <h5>{djData.video.locationTitle}</h5>
                <p>{djData.video.locationDescription}</p>

                {/* Rating */}
                <div className="d-flex align-items-center">
                  <span className="me-2">User Rating:</span>
                  <div className="rating-stars">
                    {"★".repeat(djData.video.rating)}
                    {"☆".repeat(djData.video.ratingMax - djData.video.rating)}
                    <span className="ms-1">({djData.video.rating}.0)</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </main>

      <footer className="dj-footer">
        <p>© 2025 SR Events. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default DJNights;
