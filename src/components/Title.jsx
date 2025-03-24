export default function Title({ children }) {
  return (
    <>
      <h2 className="font-poppins text-[42px] font-semibold tracking-wider text-black sm:text-5xl md:text-5xl lg:text-[54px]">
        {children}
      </h2>
    </>
  );
}
