import Data from "./data";
import Social from "./social";
import "./home.css";
import ScrollDown from "./scroll-down";
import Section from "../section";
import { Box, styled } from "@mui/material";

const Content = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
  // minHeight: "75vh",
  alignItems: "center",
  justifyContent: "center",
  gap: "3rem",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column-reverse",
    gap: "4rem",
    padding: "4rem 0",
  },
}));

const InfoContent = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  maxWidth: "1000px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column-reverse",
    gap: "2.5rem",
  },
}));

const Home = () => {
  return (
    <Section id="home">
      <Content>
        <Social />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flex: 1,
            width: "100%",
          }}
        >
          <InfoContent>
            <Data />
            <div className="home__img"></div>
          </InfoContent>
        </Box>
      </Content>
      <ScrollDown />
    </Section>
  );
};

export default Home;
