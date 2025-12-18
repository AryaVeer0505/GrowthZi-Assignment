import React from "react";
import "./Education.css";
const Education = () => {
  return (
    <div className="education">
      <h1>Education {'('} {' )'}</h1>
      <div className="container">
        <div className="sub-div">
          <p className="degree">Bachelor of Computer Application (BCA)</p>
          <p className="university">Himachal Pradesh University</p>
          <ul className="list">
            <li>
              Specialized in Backend Development, Database Management &
              Distributed Systems
            </li>
            <li>
              Coursework: Data Structures & Algorithms, Operating Systems,
              Computer Networks, DBMS, Software Engineering, Web Technologies
            </li>
          </ul>
        </div>
        <p className="year">2020 - 2023</p>
      </div>
      <div className="container">
        <div className="sub-div">
          <p className="degree">Master's of Computer Application (MCA)</p>
          <p className="university">Himachal Pradesh University</p>
          <ul className="list">
            <li>
              Specialized in Backend Development, Database Management &
              Distributed Systems
            </li>
            <li>
              Coursework: Data Structures & Algorithms, Operating Systems,
              Computer Networks, DBMS, Software Engineering, Web Technologies
            </li>
          </ul>
        </div>
        <p className="year">2023 - 2025</p>
      </div>
    </div>
  );
};

export default Education;
