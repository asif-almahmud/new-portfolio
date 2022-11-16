import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { portfolioData } from "./portfolio-data";
import Section from "../section";
import SectionTitle from "../section-title";
import ProjectCard from "./project-card";

type Props = {};

const Portfolio = (props: Props) => {
  return (
    <Section id="portfolio">
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
        <SectionTitle variant="h2">Portfolio</SectionTitle>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            // alignItems: "center",
            flexWrap: "wrap",
            gap: "40px",
          }}
        >
          {portfolioData.map((projectData) => (
            <ProjectCard {...projectData} key={projectData.title} />
          ))}
        </Box>
      </Box>
    </Section>
  );
};

export default Portfolio;
