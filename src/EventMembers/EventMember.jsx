import React from "react";
import membersData from "../Data/Data.json";
import "./EventMember.css";

function EventMembers() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center mb-4">
        <div className="col-md-8 col-lg-6 text-center">
          <h2 className="mb-3">Event Members</h2>
          <p>These are the members who are part of the event.</p>
        </div>
      </div>

      <div className="row g-4">
        {membersData.members.map((member, index) => (
          <div className="col-sm-6 col-lg-4" key={index}>
            <div className="card h-100 shadow-sm">
              <img
                src={`${member.image}`}  // ✅ Use public folder path
                className="card-img-top img-fluid rounded-top"
                alt={member.name}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{member.name}</h5>
                <p className="card-text">{member.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventMembers;
