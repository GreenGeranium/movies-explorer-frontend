import { useCallback, useState } from "react";
import validator from "validator";

const useFormValidation = () => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "email") {
      if (!validator.isEmail(value)) {
        event.target.setCustomValidity(
          "Адрес электронной почты недействителен"
        );
      } else {
        event.target.setCustomValidity("");
      }
    } else if (name === "name") {
      if (!/^[a-zA-Z \-а-яА-Я]+$/gm.test(value)) {
        event.target.setCustomValidity(
          "Разрешено использовать только латиницу, кириллицу, пробел или дефис"
        );
      } else {
        event.target.setCustomValidity("");
      }
    }

    setValues({
      ...values,
      [name]: value,
    });
    setErrors({ ...errors, [name]: event.target.validationMessage });
    setIsValid(event.target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
    setValues,
    setIsValid,
  };
};

export default useFormValidation;
