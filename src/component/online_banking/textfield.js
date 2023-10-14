import React from "react";
import { ErrorMessage, useField } from "formik";

export const Textfield = ({ lable, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div>
      <lable htmlfor={field.name}>{lable}</lable>
      <input
        className={`form-control shadow-none ${meta.touched &&
          meta.error &&
          "is-invalid"}`}
        {...field}
        {...props}
        autocomplete="off"
      ></input>
      <ErrorMessage name={field.name}></ErrorMessage>
    </div>
  );
};
