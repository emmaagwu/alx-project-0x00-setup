import { ButtonProps } from "@/interfaces";
import clsx from "clsx";


const Button: React.FC<ButtonProps> = ({
  title,
  className = "",
  size = "md",
  rounded = "md",
  onClick,
}) => {
  const sizeStyles = {
    sm: "text-sm px-3 py-1",
    md: "text-base px-4 py-2",
    lg: "text-lg px-5 py-3",
  };

  const roundedStyles = {
    sm: "rounded-sm",
    md: "rounded-md",
    full: "rounded-full",
  };

  return (
    <button
      className={clsx(
        "font-medium",
        sizeStyles[size],
        roundedStyles[rounded],
        className
      )}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;