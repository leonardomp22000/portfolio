import Title from "./Title";
import Paragraph from "./Paragraph";
import Input from "./Input";
import Button from "./Button";
import { Formik, Form } from "formik";
import { contactSchema } from "../hooks/validationSchemas";
import TextArea from "./TextArea";
import { Toaster, toast } from "react-hot-toast";

export default function CTA() {
  const handleSubmit = async (
    values,
    { setSubmitting, setErrors, resetForm }
  ) => {
    try {
      const endpoint = "https://portfolio-api-gilt-theta.vercel.app/contact";

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      if (!data.success) throw new Error(data.error || "Error en el envío");
      toast.success("Mensaje enviado con éxito");
      resetForm();
    } catch (error) {
      console.error("Error de conexion", error);
      setErrors({ general: "Error al conectar con el servidor" });
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <section
      id="contact"
      className="mx-auto max-w-md text-center p-4 flex flex-col gap-5 sm:max-w-xl md:max-w-2xl lg:max-w-5xl xl:max-w-5xl "
    >
      <Title> Lets Create Something Incredible</Title>
      <Paragraph>
        If you require more information about what I do, have an interesting
        project or one of my projects caught your attention, let me know by
        leaving your email, I will contact you as soon as possible.
      </Paragraph>

      <div className="  lg:flex lg:flex-col lg:gap-4 lg:max-w-2xl lg:mx-auto w-full  ">
        <div className="w-full flex flex-col gap-3">
          <Formik
            initialValues={{ email: "", name: "", message: "" }}
            validationSchema={contactSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="w-full flex flex-col gap-3">
                <Input
                  name="name"
                  type="text"
                  placeholder="Enter your name "
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                />

                <TextArea
                  name="message"
                  placeholder="Message"
                />

                <div className="shrink-0 mt-4">
                  <Button
                    className="px-11 py-4 font-semibold"
                    type="submit"
                  >
                    {isSubmitting ? "Sending" : "Contact Me"}
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>

      <Toaster
        position="bottom-right"
        reverseOrder={false}
      />
    </section>
  );
}
