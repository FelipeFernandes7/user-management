import { IconType } from "react-icons";

interface ButtonComponentProps {
  icon?: IconType;
  label: string;
  size?: "xs" | "sm" | "lg" | "xl" | "2xl" | "3xl";
  styles?: string;
  onClick?: (value?: any) => any;
}
export function Button({
  icon,
  label,
  size,
  styles,
  onClick,
}: ButtonComponentProps) {
  const Icon = icon;

  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center justify-center gap-2 text-${size} hover:opacity-70 active:scale-95 transition-all ease-linear duration-300 ${styles}`}
    >
      {Icon && <Icon />}
      {label}
    </button>
  );
}
