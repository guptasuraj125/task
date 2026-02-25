"use client";

import React, { forwardRef } from "react";

type InputProps = {
  name: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ name, type = "text", placeholder, value, onChange, onKeyDown }, ref) => {
    return (
      <input
        ref={ref}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        className="border rounded-md px-4 py-3 w-full"
      />
    );
  }
);

Input.displayName = "Input";

export default Input;