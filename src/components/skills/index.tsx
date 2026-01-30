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

const skillsData = [
  {
    category: "Core",
    skills: ["JavaScript", "TypeScript", "ReactJS", "NextJS", "HTML5", "CSS3"],
  },
  {
    category: "State Management",
    skills: ["Zustand", "Redux Toolkit", "Context API", "Jotai"],
  },
  {
    category: "UI Libraries",
    skills: ["Material UI", "TailwindCSS", "SCSS/SASS", "Styled Components"],
  },
  {
    category: "Tools & Libraries",
    skills: [
      "React Query",
      "React Hook Form",
      "Zod",
      "React Beautiful DnD",
      "Git",
      "GitHub",
    ],
  },
  {
    category: "Backend Familiarity",
    skills: ["Node.js", "Express", "MongoDB", "Mongoose"],
  },
  {
    category: "Mobile Familiarity",
    skills: ["React Native"],
  },
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
        {skillsData.map((group) => (
          <Details key={group.category}>
            <SubTitle variant="h4">{group.category}</SubTitle>
            <SkillsBlock>
              {group.skills.map((item) => (
                <Skill key={item}>
                  <BadgeCheckIcon className="bx bx-badge-check"></BadgeCheckIcon>
                  <Typography variant="h4">{item}</Typography>
                </Skill>
              ))}
            </SkillsBlock>
          </Details>
        ))}
      </Box>
    </Section>
  );
};

export default Skills;
