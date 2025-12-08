import React from "react";
import data from "../Data/Data.json";
import "./BirthdayCelebration.css";

function BirthdayCelebrations() {
  const birthday = data.birthdayCelebrations;

  return (
    <div className="birthday-page container py-5">

      {/* Title */}
      <h1 className="section-title">{birthday.title}</h1>
      <p className="text-center mb-5 fs-5 text-muted">{birthday.description}</p>

      {/* Image Cards */}
      <div className="row g-4">
        {birthday.cards.map((card, index) => (
          <div className="col-lg-4 col-md-6" key={index}>
            <div className="card shadow-sm border-0 birthday-card">
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

            {/* Video */}
            <div className="ratio ratio-16x9">
              <video
                controls
                poster={birthday.video.poster}
              >
                <source src={birthday.video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Info Section */}
            <div className="bg-white p-4 rounded mt-3 shadow-sm info-box">
              <h5>{birthday.video.location}</h5>
              <p className="mb-2">{birthday.video.details}</p>

              {/* Rating */}
              <div className="d-flex align-items-center">
                <span className="me-2">User Rating:</span>

                <div className="rating-stars">
                  {"★".repeat(birthday.video.rating)}
                  {"☆".repeat(birthday.video.ratingMax - birthday.video.rating)}

                  <span className="ms-1">({birthday.video.rating}.0)</span>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* Footer */}
      <footer className="birthday-footer mt-5">
        <p>© 2025 SR Events. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default BirthdayCelebrations;
