import { alpha, Box, styled, Typography } from "@mui/material";
import React from "react";
import Section from "../section";
import SectionTitle from "../section-title";

const Details = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
}));

const ExperienceBlock = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  // border: `1px solid ${theme.palette.primary.lighter}`,
  backgroundColor: theme.palette.secondary.superLight,
  borderRadius: "20px",
  padding: "20px",
  boxShadow: `0px 0px 2px ${theme.palette.primary.lighter}`,
  transition: "transform 300ms ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: `0px 0px 8px ${theme.palette.primary.lighter}`,
  },
}));

const About = () => {
  return (
    <Section id="about">
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
            elder brother. It was in the first wave of COVID19 in Bangladesh.
            From then my passion for learning and working with frontend
            technologies just increased. I have never looked back to the Textile
            Engineering career I have left behind.
          </Typography>
          <Typography sx={{ textAlign: "justify" }}>
            I love to learn from online courses, video tutorials, and articles
            of quality educators. I have taken courses from Udemy, AlgoExpert,
            FrontendMasters, Scrimba, Educative etc. I am trying my best to
            thrive in frontend engineering through experience and study. I do
            have familiarity with some backend technologies as well.
          </Typography>
          <ExperienceBlock
            sx={{
              marginTop: "6px",
            }}
          >
            <Box>
              <Typography
                variant="h4"
                sx={{
                  fontSize: "18px",
                  color: (theme) => theme.palette.primary.main,
                }}
              >
                Software Engineer Internship
              </Typography>
              <Typography variant="subtitle1" sx={{ fontSize: "14px" }}>
                at Prayers Connect Inc.
              </Typography>
            </Box>
            <Typography sx={{ textAlign: "justify" }}>
              To gear my level up to the industry standard, recently I have
              participated in a Software Engineering Internship Program in
              Prayers Connect Inc. I have copmleted the six month long program
              successfully. There I have gotten exposure to the latest and
              ruling technologies like - TypeScript, NextJS, React Query, MUI,
              Git, GitHub etc. And the professional experience of coding through
              problem solving and team work was invaluable.
            </Typography>
          </ExperienceBlock>
        </Details>
      </Box>
    </Section>
  );
};

export default About;
