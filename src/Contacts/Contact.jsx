import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>

      {/* Contact Section */}
      <section id="contact" className="contact-section text-center">
        <div className="container">
          <img
            className="image"
            src="https://github.com/sreventsjulepalle-create/media/blob/main/WhatsApp%20Image%202025-08-03%20at%2021.13.39_42fa6ba8.jpg?raw=true"
            alt="Event Contact"
          />
          <h3 className="mb-5">
            Ready to plan your next event? Fill out the form and we'll connect with you!
          </h3>
          <div className="row g-5 justify-content-center">
            {/* Provider Info */}
            <div className="col-lg-4 d-flex align-items-stretch">
              <div className="provider-info text-start w-100">
                <h4>SR EVENTS</h4>
                <p><strong>Owner:</strong> Shaik Rahamthulla</p>
                <p><strong>Village:</strong> Julepalle, Gospadu Mandal</p>
                <p><strong>District:</strong> Nandyal, Andhra Pradesh</p>
                <p><strong>Phone:</strong> +91 96526 66565</p>
                <p><strong>Email:</strong> sreventsjulepalle@gmail.com</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-6 d-flex align-items-stretch">
              <div className="form-box text-start w-100">
                <form className="contact-form">
                  <div className="mb-3">
                    <label htmlFor="fullName" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="fullName" name="fullName" placeholder="Your Name" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="number" className="form-label">Phone Number</label>
                    <input type="number" className="form-control" id="number" name="number" placeholder="+91 96526 66565" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="eventType" className="form-label">Type of Event</label>
                    <select className="form-select" id="eventType" name="eventType">
                      <option selected disabled value="">Choose an option</option>
                      <option>Birthday Celebration</option>
                      <option>Mehandhi Function</option>
                      <option>DJ Night</option>
                      <option>House Decoration</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Your Message</label>
                    <textarea className="form-control" id="message" name="message" rows="4" placeholder="Tell us about your event..."></textarea>
                  </div>
                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary btn-lg">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>
          Thank you for reaching out to SR EVENTS
          <span style={{ color: "#ff4081" }}>❤️</span> Making your memories beautiful!
        </p>
      </footer>
    </>
  );
};

export default Contact;
