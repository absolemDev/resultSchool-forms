import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FormLayout from "../formLayout";
import TextField from "../textField";
import { validationSchema } from "./validationSchema";
import { parceYupError } from "../../utils/parceYupError";

function EditForm() {
  const [student, setStudent] = useState({
    name: "",
    surname: "",
    year: "",
    portfolio: "",
  });
  const [errors, setErrors] = useState({});

  const hasStudentData = !!localStorage.getItem("student");

  const isValid = Object.keys(errors).length === 0;

  useEffect(() => {
    validationSchema
      .validate(student, { abortEarly: false })
      .then(() => setErrors({}))
      .catch((yupError) => {
        const errors = parceYupError(yupError);
        setErrors(errors);
      });
  }, [student]);

  useEffect(() => {
    if (hasStudentData) setStudent(JSON.parse(localStorage.getItem("student")));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      localStorage.setItem("student", JSON.stringify(student));
      console.log("Записано!");
    }
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setStudent((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <FormLayout title={hasStudentData ? "Редактирование" : "Создание"}>
        <form onSubmit={handleSubmit}>
          <TextField
            id="name"
            name="name"
            label="Имя"
            value={student.name}
            onChange={handleChange}
            error={errors.name}
          />
          <TextField
            id="surname"
            name="surname"
            label="Фамилия"
            value={student.surname}
            onChange={handleChange}
            error={errors.surname}
          />
          <TextField
            id="year"
            name="year"
            label="Год рождения"
            value={student.year}
            onChange={handleChange}
            error={errors.year}
          />
          <TextField
            id="portfolio"
            name="portfolio"
            label="Портфолио"
            value={student.portfolio}
            onChange={handleChange}
            error={errors.portfolio}
          />
          <button className="btn btn-primary" type="submit">
            Оформить
          </button>

          <Link to="/" className="btn btn-secondary">
            Назад
          </Link>
        </form>
      </FormLayout>
    </>
  );
}

export default EditForm;
