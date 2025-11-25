import React from "react";

function JobCard({ title, salary, location, requirements, scrollToForm }) {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="job-card">
        <div className="job-header">
          <h3>{title}</h3>
          <span className="salary">{salary}</span>
        </div>
        <div className="job-body">
          <p>
            <strong>Location:</strong> {location}
          </p>
          <ul>
            {requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>
        <a href="mailto:admin@xtechgroup.io" className="job-apply-btn">
          Apply Now
        </a>
      </div>
    </div>
  );
}

export default JobCard;
