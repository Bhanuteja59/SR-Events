import React from "react";
import data from "../Data/Data.json"
import "./MarriageStage.css";

function MarriageStage() {
  const stage = data.marriageStage;

  return (
    <div className="marriage-page">

      {/* Header */}
      <header className="text-center py-4">
        <h1 className="display-5">{stage.title}</h1>
        <p className="lead">{stage.description}</p>
      </header>

      {/* Main Content */}
      <main className="container py-5">
        <h2 className="section-title">{stage.sectionTitle}</h2>
        <p className="text-center mb-5 fs-5 text-muted">{stage.sectionDescription}</p>

        {/* Cards Section */}
        <div className="row g-4 justify-content-center">
          {stage.cards.map((card, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="card shadow-sm marriage-card">
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
          <h2 className="section-title text-center">Watch Our Stage Setup</h2>
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="ratio ratio-16x9">
                <video controls poster={stage.video.poster}>
                  <source src={stage.video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="event-info bg-white p-4 rounded mt-3 shadow-sm">
                <h5>{stage.video.location}</h5>
                <p className="mb-2">{stage.video.details}</p>
                <div className="d-flex align-items-center">
                  <span className="me-2">User Rating:</span>
                  <div className="rating-stars">
                    {"★".repeat(stage.video.rating)}
                    {"☆".repeat(stage.video.ratingMax - stage.video.rating)}
                    <span className="ms-1">({stage.video.rating}.0)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="text-center py-4 mt-5">
        <p>© 2025 SR Events. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default MarriageStage;
