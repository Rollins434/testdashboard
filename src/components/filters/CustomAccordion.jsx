import React, { useState } from "react";
import "./CustomAccordion.scss"; // Custom SCSS for styling and animations

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3>{title}</h3>
        <span className={`accordion-toggle ${isOpen ? "rotate" : ""}`}>
          ▼
        </span>
      </div>
      <div className={`accordion-content ${isOpen ? "open" : ""}`}>
        {children}
      </div>
    </div>
  );
};

export default Accordion;
