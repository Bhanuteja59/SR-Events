import React from "react";
import data from "../Data/Data.json"
import "./MehandhiFunction.css";

function MehandhiFunction() {
  const mehndi = data.mehndiFunction;

  return (
    <div className="mehndi-page">

      {/* Header */}
      <header className="mehndi-header text-center py-4">
        <h1 className="display-5">{mehndi.title}</h1>
        <p className="lead">{mehndi.description}</p>
      </header>

      {/* Main Content */}
      <main className="container py-5">

        {/* Cards Section */}
        <div className="row g-4 justify-content-center">
          {mehndi.cards.map((card, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="card shadow-sm mehndi-card">
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
          <h2 className="section-title text-center">Watch the Celebration</h2>
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="ratio ratio-16x9">
                <video controls poster={mehndi.video.poster}>
                  <source src={mehndi.video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="event-info p-4 rounded mt-3 shadow-sm">
                <h5>{mehndi.video.location}</h5>
                <p className="mb-2">{mehndi.video.details}</p>
                <div className="d-flex align-items-center">
                  <span className="me-2">User Rating:</span>
                  <div className="rating-stars">
                    {"★".repeat(mehndi.video.rating)}
                    {"☆".repeat(mehndi.video.ratingMax - mehndi.video.rating)}
                    <span className="ms-1">({mehndi.video.rating}.0)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="mehndi-footer text-center py-4 mt-5">
        <p>© 2025 SR Events. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default MehandhiFunction;
