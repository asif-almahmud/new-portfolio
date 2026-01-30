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

const experiences = [
  {
    company: "Agency Handy",
    role: "Software Engineer (L2)",
    period: "Sept 2025 – Nov 2025",
    location: "Dhaka, Bangladesh",
    points: [
      "Developed and maintained key features such as Service V2 and Custom Fields, improving workflow flexibility.",
      "Resolved critical production issues to ensure platform stability and performance.",
      "Mentored junior engineers and supported new hires for smooth onboarding.",
    ],
  },
  {
    company: "Agency Handy",
    role: "Software Engineer (L1)",
    period: "Sept 2023 – Sept 2025",
    location: "Dhaka, Bangladesh",
    points: [
      "Designed and implemented major modules including File Management, Public Forms, Invoice Management, Tax, and Timesheet.",
      "Contributed across all modules, including the checkout system and complex form handling.",
      "Built reusable UI components with Material UI, accelerating feature development.",
      "Leveraged React Query for optimized server state handling, reducing redundant API calls.",
      "Collaborated with designers, backend engineers, and QA to deliver quality releases on schedule.",
    ],
  },
  {
    company: "Onethread",
    role: "Software Engineer Intern",
    period: "May 2023 – Aug 2023",
    location: "Dhaka, Bangladesh",
    points: [
      "Contributed to front-end development using React and TypeScript.",
      "Implemented responsive UIs with Material UI, following company design standards.",
      "Assisted senior developers in building and refining key features.",
    ],
  },
  {
    company: "Prayers Connect Inc",
    role: "Software Engineer Intern",
    period: "Apr 2022 – Sept 2022",
    location: "Remote",
    points: [
      "Assisted in building and maintaining web apps using ReactJS, NextJS, and TypeScript.",
      "Developed UI components based on design specifications using Material UI.",
      "Participated in daily stand-ups and sprint planning within an Agile team environment.",
    ],
  },
];

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
            elder brother during the first wave of COVID-19 in Bangladesh. Since
            then, my passion for frontend technologies has only grown. I have
            fully transitioned from Textile Engineering to Software Engineering,
            driven by a love for creating beautiful and performant web
            applications.
          </Typography>
        </Details>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            width: "100%",
          }}
        >
          <Typography
            variant="h3"
            sx={{ textAlign: "center", fontSize: "24px", fontWeight: "600" }}
          >
            Professional Experience
          </Typography>
          {experiences.map((exp, index) => (
            <ExperienceBlock key={index}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                  marginBottom: "8px",
                }}
              >
                <Box>
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: "18px",
                      color: (theme) => theme.palette.primary.main,
                      fontWeight: "600",
                    }}
                  >
                    {exp.role}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ fontSize: "14px" }}>
                    at {exp.company}
                  </Typography>
                </Box>
                <Box sx={{ textAlign: "right" }}>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: "12px", fontWeight: "600" }}
                  >
                    {exp.period}
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: "12px" }}>
                    {exp.location}
                  </Typography>
                </Box>
              </Box>
              <ul style={{ paddingLeft: "20px", margin: 0 }}>
                {exp.points.map((point, i) => (
                  <li key={i} style={{ marginBottom: "4px" }}>
                    <Typography variant="body2">{point}</Typography>
                  </li>
                ))}
              </ul>
            </ExperienceBlock>
          ))}
        </Box>
      </Box>
    </Section>
  );
};

export default About;
