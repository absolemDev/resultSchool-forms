import React from "react";
import { Link } from "react-router-dom";
import StudentCard from "../components/studentCard";

function MainPage() {
  const student = localStorage.getItem("student");
  return (
    <div className="col-md-6 offset-md-3 shadow p-4">
      <h1 className="mb-4">Карточка студнта</h1>
      {student ? (
        <StudentCard {...JSON.parse(student)} />
      ) : (
        <div>Нет данных</div>
      )}
      <Link to="/edit" className="btn btn-primary mt-2">
        {student ? "Редактировать" : "Добавить"}
      </Link>
    </div>
  );
}

export default MainPage;
