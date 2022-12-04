import { alpha, Box, Container, Link, styled } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { useScrollSpyIndicator } from "../../context/ScrollSpyContext";

const SectionContainer = styled(Container)(({ theme }) => ({
  height: "1px",
  margin: "auto",
  position: "fixed",
  top: "0px",
  left: "50%",
  transform: "translateX(-50%)",
  backgroundColor: "transparent",
}));

const GoToTop = () => {
  const { navOption } = useScrollSpyIndicator();
  return (
    <SectionContainer maxWidth="md">
      <Link
        href="#home"
        sx={{
          display: navOption === "home" ? "none" : "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: "calc(100vh - 130px)",
          right: "15px",
          zIndex: 100,
          width: "50px",
          height: "50px",
          borderRadius: "10%",
          backgroundColor: (theme) => alpha(theme.palette.primary.lighter, 0.5),
          cursor: "pointer",
          transition: "all 200ms ease-in-out",
          "&:hover": {
            color: "black",
            backgroundColor: (theme) =>
              alpha(theme.palette.primary.lighter, 0.35),
          },
        }}
      >
        <ArrowUpwardIcon color="secondary" />
      </Link>
    </SectionContainer>
  );
};

export default GoToTop;
