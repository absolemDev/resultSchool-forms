import * as yup from "yup";

// const getCurrentYear = () => {
//   const date = new Date();
//   return date.getFullYear();
// }

export const validationSchema = yup.object().shape({
  name: yup.string().required("Поле 'Имя' обязательно для заполнения"),
  surname: yup.string().required("Поле 'Фамилия' обязательно для заполнения"),
  year: yup
    .number()
    .typeError("Поле 'Год рождения' обязательно для заполнения")
    .min(1900, "Поле 'Год рождения' не корректно")
    .max(new Date().getFullYear(), "Поле 'Год рождения' не корректно"),
  portfolio: yup
    .string()
    .required("Поле 'Портфолио' обязательно для заполнения")
    .matches(/^https?:\/\/\S+\.\S+$/g, "Поле 'Портфолио' должно быть ссылкой"),
});
