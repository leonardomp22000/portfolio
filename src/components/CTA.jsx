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
    { setSubmitting, setErrors, resetForm },
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
      toast.error("El mensaje no pudo ser enviado");
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <section
      id="contact"
      className="mx-auto flex max-w-md flex-col gap-5 p-4 text-center sm:max-w-xl md:max-w-2xl lg:max-w-5xl xl:max-w-5xl"
    >
      <Title> Lets Create Something Incredible</Title>
      <Paragraph>
        If you require more information about what I do, have an interesting
        project or one of my projects caught your attention, let me know by
        leaving your email, I will contact you as soon as possible.
      </Paragraph>

      <div className="w-full lg:mx-auto lg:flex lg:max-w-2xl lg:flex-col lg:gap-4">
        <div className="flex w-full flex-col gap-3">
          <Formik
            initialValues={{ email: "", name: "", message: "" }}
            validationSchema={contactSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="flex w-full flex-col gap-3">
                <Input name="name" type="text" placeholder="Enter your name " />
                <Input
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                />

                <TextArea name="message" placeholder="Message" />

                <div className="mt-4 shrink-0">
                  <Button className="px-11 py-4 font-semibold" type="submit">
                    {isSubmitting ? "Sending" : "Contact Me"}
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>

      <Toaster position="bottom-right" reverseOrder={false} />
    </section>
  );
}
