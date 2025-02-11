import * as Yup from "yup";

export const contactSchema = Yup.object().shape({
  email: Yup.string()
    .email("El email no es válido")
    .required("El email es obligatorio"),
  name: Yup.string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .required("El nombre es obligatorio"),
  message: Yup.string()
    .min(10, "El mensaje debe tener al menos 10 caracteres")
    .required("El mensaje es obligatorio"),
});
