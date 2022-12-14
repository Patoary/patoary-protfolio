import React from "react";

const EducationCard = ({ education }) => {
  const { degree, institute, year } = education;
  return (
    <li>
      <div
        data-aos="zoom-in-left"
        data-aos-duration="1500"
        className="timeline-card flex items-center mb-10"
      >
        <div className="education-card p-5 lg:p-10 ml-10 text-left text-black">
          <p className="text-xl font-semibold">{degree}</p>
          <span margin={"mb-3 my-3"} />
          <p>{institute}</p>
          <p>{year}</p>
        </div>
      </div>
    </li>
  );
};

export default EducationCard;
