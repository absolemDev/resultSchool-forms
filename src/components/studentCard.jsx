import React from "react";
import PropTypes from "prop-types";

function StudentCard({ name, surname, year, portfolio }) {
  const renderAge = (year) => {
    const age = new Date().getFullYear() - year;
    if (
      [11, 12, 13, 14, 15, 16, 17, 18, 19].includes(age % 100) ||
      [0, 5, 6, 7, 8, 9].includes(age % 10)
    ) {
      return `(${age} лет)`;
    }
    if ([2, 3, 4].includes(age % 10)) {
      return `${age} года`;
    }
    if (age % 10 === 1) {
      return `${age} год`;
    }
  };
  return (
    <div>
      <p>
        <span className="fw-bold">Имя:</span> {name}
      </p>
      <p>
        <span className="fw-bold">Фамилия:</span> {surname}
      </p>
      <p>
        <span className="fw-bold">Год рождения:</span> {year}{" "}
        {renderAge(Number(year))}
      </p>
      <p>
        <span className="fw-bold">Портфолио:</span>{" "}
        <a href={portfolio}>{portfolio}</a>
      </p>
    </div>
  );
}

StudentCard.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  portfolio: PropTypes.string.isRequired,
};

export default StudentCard;
