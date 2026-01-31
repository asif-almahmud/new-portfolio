import { Box, styled, Typography } from "@mui/material";
import Section from "../section";
import SectionTitle from "../section-title";

const Details = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
}));

const About = () => {
  return (
    <Section
      id="about"
      sx={{
        minHeight: "unset",
      }}
    >
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
        <SectionTitle variant="h2">About Me</SectionTitle>
        <Details>
          <Typography sx={{ textAlign: "justify" }}>
            My programming journey started with the help and encouragement of my
            elder brother during the first wave of COVID-19 in Bangladesh. Since
            then, my passion for frontend technologies has only grown. I have
            fully transitioned from Textile Engineering to Software Engineering,
            driven by a love for creating beautiful and performant web
            applications.
          </Typography>
        </Details>
      </Box>
    </Section>
  );
};

export default About;
