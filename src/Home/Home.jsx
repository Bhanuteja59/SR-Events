import React from "react";
import "./Home.css";
import data from "../Data/Data.json";

function Home() {
  return (
    <main className="home-page">

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container text-center">
          <img
            src="https://github.com/sreventsjulepalle-create/media/blob/main/924bf0b6-aa8d-4d3e-845e-020bb9e859e6.png?raw=true"
            alt="SR Events Logo"
            className="hero-logo"
          />
          <h1 className="hero-title fade-in">Welcome to SR Events</h1>
          <p className="hero-subtitle fade-in">Your events become memories with us!</p>
          <a href="#events" className="hero-btn">Explore Our Events</a>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="events-section">
        <div className="container">
          <h2 className="section-title text-center">Our Events Gallery</h2>
          <p className="section-subtitle text-center">
            Explore some of our most memorable events including DJ nights,
            birthday celebrations, mehendi functions, marriage stages and more.
          </p>

          <div className="row g-4 justify-content-center">
            {data.events.map((event, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="card event-card">
                  <img src={event.image} className="card-img-top" alt={event.title} />
                  <div className="card-body">
                    <h5 className="card-title text-white">{event.title}</h5>
                    <p className="card-text text-white">{event.description}</p>
                    <a href={event.link} className="event-btn">View Details</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr />

      {/* Follow Us Section */}
      <section className="social-section py-5 bg-light">
        <div className="container">
          <h2 className="section-title text-center mb-4">Follow Us</h2>
          <p className="section-subtitle text-center mb-5">
            Stay connected with us to get the latest updates, behind-the-scenes moments, and more.
          </p>

          {/* Instagram Link */}
          <div className="text-center">
            <a
              href="https://www.instagram.com/srevents16?igsh=MXRxOWt5aXFheHRkdw=="
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn instagram-btn"
            >
              Follow Us on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2 className="section-title text-center text-warning">Contact Us</h2>
          <p className="section-subtitle text-center text-black fw-large">
            Ready to plan your next event? Fill out the form and we'll contact you shortly!
          </p>
          <div className="row justify-content-center mb-4">
            <div className="col-lg-6">
              <div className="provider-info">
                <h4>SR EVENTS</h4>
                <p><strong>Owner:</strong> Shaik Rahamthulla</p>
                <p><strong>Village:</strong> Julepalle, Gospadu Mandal</p>
                <p><strong>District:</strong> Nandyal, Andhra Pradesh</p>
                <p><strong>Phone:</strong> +91 96526 66565</p>
                <p><strong>Email:</strong> sreventsjulepalle@gmail.com</p>
              </div>
            </div>
          </div>

          <div>
            {/* Optional: Contact form can be added here */}
          </div>

        </div>
      </section>

    </main>
  );
}

export default Home;
