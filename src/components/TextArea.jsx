import { useField } from "formik";
export default function TextArea({ placeholder = "", ...props }) {
  const [field, meta] = useField(props);

  return (
    <>
      <textarea
        className="w-full rounded-2xl border border-[#AFAFAF] bg-[#F8F8F8] p-4"
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
