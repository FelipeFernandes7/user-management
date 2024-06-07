interface TypographyProps {
  styles?: string;
  variant: "h1" | "h2" | "h3" | "h4" | "span" | "strong" | "p";
  size?: "xs" | "sm" | "lg" | "xl" | "2xl" | "3xl";
  text: string;
}
export function Typography({ variant, size, text, styles }: TypographyProps) {
  const Component = variant;
  return <Component className={`text-${size} ${styles}`}>{text}</Component>;
}
