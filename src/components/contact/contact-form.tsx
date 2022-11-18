import { Alert, AlertTitle, Box, Snackbar, TextField } from "@mui/material";
import { Formik, FormikValues } from "formik";
import * as yup from "yup";
import Send from "../../assets/send.svg";
import { ThemedButton } from "../themed-button";
import emailjs from "@emailjs/browser";
import { useEffect, useRef, useState } from "react";

const initialValues = {
  from_name: "",
  email: "",
  message: "",
};

const userSchema = yup.object().shape({
  from_name: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  message: yup.string().required("required"),
});

const ContactForm = () => {
  const [formEelement, setFormElement] = useState<HTMLFormElement | string>("");
  const [showAlert, setShowAlert] = useState(false);
  const [messageSentSuccessful, setMessageSentSuccessful] = useState(false);
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_j1fgz6q",
        "template_k8gr9re",
        formEelement,
        "OBx6Zd-zEWeekCXaR"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          setMessageSentSuccessful(true);
          setShowAlert(true);
        },
        (error) => {
          setMessageSentSuccessful(false);
          setShowAlert(true);
          console.log(error.text);
        }
      );
  };

  const handleFormSubmit = (values: FormikValues, { resetForm }: any) => {
    console.log(values);
    console.log(form.current);
    console.log(formEelement);
    console.log(form.current ? form.current : "");

    sendEmail();
    resetForm();
  };

  const handleClose = () => {
    setShowAlert(false);
  };

  useEffect(() => {
    setFormElement(form.current as HTMLFormElement);
  }, []);
  return (
    <Box sx={{ width: "100%" }}>
      <Snackbar
        open={showAlert}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleClose}
          severity={messageSentSuccessful ? "success" : "error"}
          variant="filled"
          elevation={6}
          sx={{ width: "100%" }}
        >
          <AlertTitle>{messageSentSuccessful ? "Success" : "Error"}</AlertTitle>
          {messageSentSuccessful
            ? "Message sent successfully. Thanks for reaching out."
            : "Sorry something went wrong. Please try again later."}
        </Alert>
      </Snackbar>
      <Formik
        initialValues={initialValues}
        validationSchema={userSchema}
        onSubmit={handleFormSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <Box>
            <form ref={form} onSubmit={handleSubmit}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Your Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.from_name}
                  name="from_name"
                  error={!!touched.from_name && !!errors.from_name}
                  helperText={touched.from_name && errors.from_name}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Your Email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  name="email"
                  error={!!touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  multiline
                  rows={4}
                  type="text"
                  label="Your Message"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.message}
                  name="message"
                  error={!!touched.message && !!errors.message}
                  helperText={touched.message && errors.message}
                />

                <ThemedButton component="button" type="submit">
                  Send Message <Send />
                </ThemedButton>
              </Box>
            </form>
          </Box>
        )}
      </Formik>
    </Box>
  );
};

export default ContactForm;
