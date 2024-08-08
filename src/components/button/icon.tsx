import { LucideProps } from "lucide-react";

type IconProps = {
  Icon: React.ComponentType<LucideProps>;
};

export const Icon = ({ Icon }: IconProps) => {
  return (
    <Icon className="size-4"/>
  )
}