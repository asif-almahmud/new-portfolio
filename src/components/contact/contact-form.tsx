import { Box, Button, TextField } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Formik, FormikValues } from "formik";
import * as yup from "yup";
import Send from "../../assets/send.svg";
import { CTAButton } from "../cta-button";

const initialValues = {
  name: "",
  email: "",
  message: "",
};

const userSchema = yup.object().shape({
  name: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  message: yup.string().required("required"),
});

const ContactForm = () => {
  const theme = useTheme();
  const isNonMobile = useMediaQuery(theme.breakpoints.up("xs"));

  const handleFormSubmit = (values: FormikValues) => {
    console.log(values);
  };
  return (
    <Box m="20px">
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
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
            <form onSubmit={handleSubmit} style={{ width: "100%" }}>
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
                  value={values.name}
                  name="name"
                  error={!!touched.name && !!errors.name}
                  helperText={touched.name && errors.name}
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

                <CTAButton href="" type="submit">
                  Send Message <Send />
                </CTAButton>
              </Box>
            </form>
          </Box>
        )}
      </Formik>
    </Box>
  );
};

export default ContactForm;
