import { ButtonHTMLAttributes } from "react";
import { Icon } from "./icon";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "minimal" | "opacity";
};

const ButtonRoot = ({
  children,
  variant = "primary",
  ...props
}: ButtonProps) => {
  const variants = {
    primary: "bg-orange-400 text-orange-950 hover:bg-orange-500",
    secondary: "bg-zinc-800 text-zinc-300 hover:bg-zinc-700",
    minimal: "mt-3 gap-2 text-orange-400 hover:text-orange-500 py-0 px-0",
    opacity: "mt-3 gap-2 text-zinc-400 hover:text-zinc-300 py-0 px-0",
  };

  return (
    <button
      className={`px-3 py-1.5 gap-1.5 flex items-center rounded-lg font-medium text-sm ${variants[variant]} transition-colors`}
      {...props}
    >
      {children}
    </button>
  );
};

const Button = {
  Root: ButtonRoot,
  Icon,
};

export { Button };
