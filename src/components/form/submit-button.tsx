import { ArrowRight } from "lucide-react";

import { Button, ButtonProps } from "../button/button";

type SubmitButtonProps = ButtonProps;

export const SubmitButton = ({ children, ...props }: SubmitButtonProps) => {
  return (
    <Button.Root type="submit" {...props}>
      {children}
      <Button.Icon Icon={ArrowRight} />
    </Button.Root>
  );
};
