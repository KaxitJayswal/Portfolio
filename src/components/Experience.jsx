import React from "react";
import "./Experience.css";

const experienceData = [
  {
    role: "Frontend Development Intern",
    company: "EnSpirit Tech",
    duration: "Dec 2025 - April 2026",
    highlights: [
      "Worked on modern frontend development tasks in a professional environment.",
      "Developed responsive and user-friendly web interfaces using React.js.",
      "Collaborated with designers and backend developers to build user-friendly interfaces.",
      "Implemented UI/UX best practices to enhance user experience.",
      "Integrated REST APIs to fetch and display data, ensuring seamless frontend-backend communication.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience">
      <div className="section-header">
        <h2>
          <span className="section-number">05.</span> Experience
        </h2>
      </div>

      <div className="section-content">
        <div className="experience-list">
          {experienceData.map((experience) => (
            <article
              className="experience-card animated animated-delay-1"
              key={experience.company}
            >
              <div className="experience-header">
                <h3>
                  {experience.role}
                  <span className="experience-company">
                    {" "}
                    - {experience.company}
                  </span>
                </h3>
                <p className="experience-duration">{experience.duration}</p>
              </div>

              <ul className="experience-highlights">
                {experience.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
