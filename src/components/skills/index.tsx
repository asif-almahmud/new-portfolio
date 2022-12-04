import { Box, lighten, styled, Typography } from "@mui/material";
import React from "react";
import Section from "../section";
import SectionTitle from "../section-title";

const Details = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "1.5rem",
}));

const SubTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.light,
}));

const SkillsBlock = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.5rem",
  flexWrap: "wrap",
}));

const Skill = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "0.25rem",
  padding: "1.25rem",
}));

const BadgeCheckIcon = styled("i")(({ theme }) => ({
  fontSize: "22px",
}));

const fluentWith = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "React Router",
  "NextJS",
  "Redux",
  "Redux-Toolkit",
  "Context-API",
  "React Query",
  "MUI",
  "TailwindCSS",
  "SASS",
];

const familiarWith = [
  "Bootstrap",
  "Reactstrap",
  "Figma",
  "Formik",
  "React Hook Form",
  "Yup",
  "Jotai",
  "React Testing Library",
  "Jest",
  "Node",
  "Express",
  "MongoDB",
  "Firebase",
];

const Skills = () => {
  return (
    <Section id="skills">
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
        <SectionTitle variant="h2">Technical Skills</SectionTitle>
        <Details>
          <SubTitle variant="h4">Fluent In</SubTitle>
          <SkillsBlock>
            {fluentWith.map((item) => (
              <Skill key={item}>
                <BadgeCheckIcon className="bx bx-badge-check"></BadgeCheckIcon>
                <Typography variant="h4">{item}</Typography>
              </Skill>
            ))}
          </SkillsBlock>
        </Details>
        <Details>
          <SubTitle variant="h4">Familiar With</SubTitle>
          <SkillsBlock>
            {familiarWith.map((item) => (
              <Skill key={item}>
                <BadgeCheckIcon className="bx bx-badge-check"></BadgeCheckIcon>
                <Typography variant="h4">{item}</Typography>
              </Skill>
            ))}
          </SkillsBlock>
        </Details>
      </Box>
    </Section>
  );
};

export default Skills;
