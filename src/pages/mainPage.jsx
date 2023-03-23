import React from "react";
import { Link } from "react-router-dom";
import StudentCard from "../components/studentCard";

function MainPage() {
  const student = localStorage.getItem("student");
  return (
    <>
      <h1>Карточка студнта</h1>
      {student ? <StudentCard student={JSON.parse(student)} /> : <div>Нет двнных</div>}
      <Link to="/edit" className="btn btn-primary">
        {student ? "Редактировать" : "Добавить"}
      </Link>
    </>
  );
}

export default MainPage;
