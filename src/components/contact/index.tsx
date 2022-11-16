import { Box } from "@mui/material";
import React from "react";
import Section from "../section";
import SectionTitle from "../section-title";
import ContactForm from "./contact-form";

type Props = {};

const Contact = (props: Props) => {
  return (
    <Section id="contact">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "3rem",
          width: "100%",
        }}
      >
        <SectionTitle variant="h2">Let's Connect</SectionTitle>
        <Box sx={{ width: "100%" }}>
          <Box>
            <Box></Box>
          </Box>
          <ContactForm />
        </Box>
      </Box>
    </Section>
  );
};

export default Contact;
