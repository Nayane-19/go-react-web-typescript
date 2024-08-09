import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ name, type = "text", placeholder }: InputProps) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="flex-1 text-sm bg-transparent mx-2 outline-none placeholder:text-zinc-500 text-zinc-100"
      autoComplete="off"
    />
  );
};
