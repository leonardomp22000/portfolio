import clsx from "clsx";

const buttonStyles = {
  primary:
    "bg-primary-main hover:bg-primary-hover active:bg-primary-active text-white",
  secondary:
    "bg-[#ffffff] hover:bg-primary-main hover:text-white  active:bg-primary-active text-black border !rounded-xl border-gray-400",
  outline:
    "border border-primary-main text-primary-main hover:bg-primary-hover hover:text-white active:bg-primary-active",
  text: "hover:underline active:text-slate-600",
};

export default function Button({
  children,
  handleFunction,
  variant = "primary",
  className = "",
}) {
  return (
    <button
      onClick={handleFunction}
      className={clsx(
        "rounded-md px-4 py-2 font-poppins text-base font-normal tracking-wide transition-colors duration-200 sm:text-lg",
        buttonStyles[variant],
        className,
      )}
    >
      {children}
    </button>
  );
}
