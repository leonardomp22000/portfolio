export default function Button({ children, handleFunction }) {
  return (
    <button
      onClick={handleFunction}
      className=" rounded-md bg-[#fd6f00] hover:bg-[#ff890a] active:bg-[#cc5002] px-4 py-2 text-white font-poppins font-normal text-base tracking-wide"
    >
      {children}
    </button>
  );
}
