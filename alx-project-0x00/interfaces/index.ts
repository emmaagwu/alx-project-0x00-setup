export interface PillProps {
  title: string
}

export interface ButtonProps {
  title: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  rounded?: "sm" | "md" | "full";
  onClick?: () => void;
}