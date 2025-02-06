import clsx from "clsx";

const buttonStyles = {
  primary: "bg-[#fd6f00] hover:bg-[#ff890a] active:bg-[#cc5002] text-white",
  secondary:
    "bg-[#ffffff] hover:bg-[#FD6F00] hover:text-white  active:bg-[#cc5002] text-black border !rounded-xl border-gray-400",
  outline:
    "border border-[#fd6f00] text-[#fd6f00] hover:bg-[#fd6f00] hover:text-white",
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
        "rounded-md px-4 py-2 font-poppins font-normal text-base tracking-wide transition-colors duration-200",
        buttonStyles[variant],
        className
      )}
    >
      {children}
    </button>
  );
}
