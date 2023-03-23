import * as yup from "yup";

export const validationSchema = yup.object().shape({
  name: yup.string().required("Поле 'Имя' обязательно для заполнения"),
  surname: yup.string().required("Поле 'Фамилия' обязательно для заполнения"),
  year: yup.string().required("Поле 'Год рождения' обязательно для заполнения"),
  portfolio: yup.string().required("Поле 'Портфолио' обязательно для заполнения"),
  // fio: yup
  //   .string()
  //   .required("ФИО обязательно для заполнения")
  //   .matches(/^(([a-zA-Zа-яА-Я]+)s){1,}(([a-zA-Zа-яА-Я]+)s?){1,}$/, "Введите корректное ФИО"),
  // email: yup.string().required("Электронная почта обязательна для заполнения").email("Email введён некорректно"),
  // address: yup.string().required("Адрес обязателен для заполнения"),
  // deliveryType: yup.string().required("Выберите вариант доставки"),
  // needLiftFloor: yup.string().required("Укажите нужен ли подъём на этаж"),
  // agreement: yup.array().test(
  //   "contains value", // название проверки
  //   "Согласие на обработку данных обязательно", // текст ошибки
  //   // функция, которая проверит валидность
  //   (value) => value.includes("1")
  // ),
});
