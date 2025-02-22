import { useField } from "formik";
export default function Input({ placeholder = "", type = "", ...props }) {
  const [field, meta] = useField(props);

  return (
    <>
      <input
        className="border w-full p-4 rounded-2xl border-[#AFAFAF] bg-[#F8F8F8]"
        type={type}
        placeholder={placeholder}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
}
