import { useField } from "formik";
export default function TextArea({ placeholder = "", ...props }) {
  const [field, meta] = useField(props);

  return (
    <>
      <textarea
        className="border w-full p-4 rounded-2xl border-[#AFAFAF] bg-[#F8F8F8]"
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
