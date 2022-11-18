import { Box, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import Section from "../section";
import SectionTitle from "../section-title";
import ContactForm from "./contact-form";
import SocialContact from "./social-contact";

type Props = {};

const Contact = (props: Props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
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
        <Box
          sx={{
            padding: "30px 10px",
            width: "100%",
            display: "flex",
            flexDirection: isMobile ? "column-reverse" : "row",
            gap: isMobile ? "40px" : null,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SocialContact />
          <ContactForm />
        </Box>
      </Box>
    </Section>
  );
};

export default Contact;
