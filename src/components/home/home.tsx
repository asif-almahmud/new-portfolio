import Data from "./data";
import Social from "./social";
import "./home.css";
import ScrollDown from "./scroll-down";
import Section from "../section";
import { Box, styled } from "@mui/material";

const Content = styled("div")(({ theme }) => ({
  display: "flex",
  // backgroundColor: "red",
  width: "100%",
}));

const InfoContent = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-evenly",
  flex: 1,
  width: "100%",
  transform: "translateY(-66px)",
  [theme.breakpoints.down("xs")]: {
    flexDirection: "column-reverse",
    alignItems: "center",
    gap: "2rem",
    marginTop: "2rem",
    transform: "translateY(0px)",
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
            // gap: "4rem",
          }}
        >
          <InfoContent>
            <Data />
            <div className="home__img"></div>
          </InfoContent>
          <ScrollDown />
        </Box>
      </Content>
    </Section>
  );
};

export default Home;
