import React from "react";

const CareerPathSection = () => {
  const careerPaths = [
    {
      title: "FUNDED TRADER",
      description:
        "Trade big. Risk none. Show consistency and confidence in your trading plan to qualify for real capital. Pass internal reviews, psychology evaluation, and mock account tests. Mentorship included—no fluff, no random signups.",
    },
    {
      title: "WORKSHOP SPEAKER",
      description:
        "You traded with purpose, now you teach with it. As a Workshop Speaker, lead webinars, represent 8Con in events, and share your story. Qualification: Journal excellence, strong communication, and final interview.",
    },
    {
      title: "FOREX INSTRUCTOR",
      description:
        "You learned with Confluence, now you teach it. As a certified Forex Coach, lead classes, mentor juniors, and guide new traders. Qualification: core competency completion, coaching evaluation, and a mock teaching session.",
    },
    {
      title: "8CON FRANCHISEE",
      description:
        "Your own trading hub—powered by 8Con. Franchise opportunities are open to homegrown traders who embody our system, values, and standards. Qualification: full course graduate, business mentorship track, and completed operations training.",
    },
  ];

  return (
    <section id="careerpath" className="section section-careerpath">
      <div className="careerpath-title fade-in">
        <h1>CAREER PATH</h1>
        <p>From learner to leader, your forex journey starts here.</p>
      </div>

      <div className="careerpath-cards">
        {careerPaths.map((path, index) => (
          <div className="career-card" key={index}>
            <div className="career-content">
              <h3 className="career-title fade-in">{path.title}</h3>
              <p className="career-description fade-in">{path.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareerPathSection;
