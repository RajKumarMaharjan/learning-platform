import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function ContactForm() {
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="mt-6">
            <Field
              type="text"
              name="name"
              placeholder="Your Name"
              className={`w-full border border-[#CED4D9] rounded pl-2 py-1 ${
                errors.name && touched.name ? "border-red" : ""
              }`}
            />
            <ErrorMessage name="name" component="div" className="text-red" />

            <Field
              type="email"
              name="email"
              placeholder="Your Email"
              className={`w-full border border-[#CED4D9] rounded pl-2 py-1 mt-4 ${
                errors.name && touched.name ? "border-red" : ""
              }`}
            />
            <ErrorMessage name="email" component="div" className="text-red" />

            <Field
              as="textarea"
              name="message"
              className={`w-full border h-[120px] border-[#CED4D9] rounded pl-2 py-1 mt-4 ${
                errors.name && touched.name ? "border-red" : ""
              }`}
            />
            <ErrorMessage name="message" component="div" className="text-red" />
            <button
              type="submit"
              id="centerBtn"
              className="border-2 w-1/2 h-[50px] text-[16px] mt-4 font-[700] flex justify-center items-center hover:text-white"
            >
              <span className="absolute">Send Message</span>
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ContactForm;
