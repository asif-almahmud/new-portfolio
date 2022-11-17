import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Snackbar,
  TextField,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Form, Formik, Field, FormikValues, FormikState } from "formik";
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
  const [showErrorMessageOnSubmit, setShowErrorMessageOnSubmit] =
    useState(false);
  const [formEelement, setFormElement] = useState<HTMLFormElement | string>("");
  const [showAlert, setShowAlert] = useState(false);
  const form = useRef<HTMLFormElement | null>(null);
  const theme = useTheme();
  const isNonMobile = useMediaQuery(theme.breakpoints.up("xs"));

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
        },
        (error) => {
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

  useEffect(() => {
    setFormElement(form.current as HTMLFormElement);
  }, []);
  return (
    <Box m="20px">
      {/* <Snackbar
      open={showAlert}
      autoHideDuration={4000}
      // onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert
        // onClose={handleClose}
        severity={"success"}
        variant="filled"
        elevation={6}
        sx={{ width: "100%" }}
      >

      </Alert>
    </Snackbar> */}
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
          <Box sx={{ width: isNonMobile ? "50%" : "100%", bg: "red" }}>
            <form ref={form} onSubmit={handleSubmit} style={{ width: "100%" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  bg: "red",
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
