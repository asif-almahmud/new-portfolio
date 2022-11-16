import { Box, Container, styled } from "@mui/material";
import { ReactNode } from "react";

const SectionContainer = styled(Container)(({ theme }) => ({
  // minHeight: "100vh",
  minHeight: "calc(100vh - 66px)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  [theme.breakpoints.down("xs")]: {
    minHeight: 0,
  },
}));

interface ISectionProps {
  children: ReactNode;
  id?: string;
}

const Section = ({ children, id }: ISectionProps) => {
  return (
    <SectionContainer id={id} maxWidth="md">
      <Box sx={{ height: "70px", width: "100%" }}></Box>
      {children}
    </SectionContainer>
  );
};

export default Section;
