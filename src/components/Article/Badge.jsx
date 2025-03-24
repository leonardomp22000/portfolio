import clsx from "clsx";
const BadgeStyles = {
  solid: "bg-primary-main text-white",
  outline: "border border-primary-main text-primary-main",
};

export default function Badge({
  variant = "outline",
  className = "",
  children,
}) {
  return (
    <div
      className={clsx(
        "rounded-3xl px-2 py-1 font-poppins text-xs font-normal tracking-wide transition-colors duration-200 sm:text-sm",
        BadgeStyles[variant],
        className,
      )}
    >
      {children}
    </div>
  );
}
