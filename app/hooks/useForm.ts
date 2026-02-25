"use client";

import { useState } from "react";

export default function useForm<T>(initialValues: T) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return {
    values,
    setValues,
    handleChange,
  };
}