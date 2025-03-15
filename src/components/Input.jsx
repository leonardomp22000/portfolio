import { useField } from "formik";
export default function Input({ placeholder = "", type = "", ...props }) {
  const [field, meta] = useField(props);

  return (
    <>
      <input
        className="w-full rounded-2xl border border-[#AFAFAF] bg-[#F8F8F8] p-4"
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
