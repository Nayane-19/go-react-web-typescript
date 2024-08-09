import { FormHTMLAttributes } from "react";

import { SubmitButton } from "./submit-button";
import { Input } from "./input";

type FormProps = FormHTMLAttributes<HTMLFormElement> & {
  children: React.ReactNode;
  action: (data: FormData) => void;
};

export const FormRoot = ({ children, action, ...props }: FormProps) => {
  return (
    <form
      action={action}
      className="flex items-center gap-2 bg-zinc-900 p-2 rounded-xl border border-zinc-800 ring-orange-400 focus-within:ring-1"
      {...props}
    >
      {children}
    </form>
  );
};

const Form = {
  Root: FormRoot,
  Input,
  SubmitButton,
};

export { Form };
