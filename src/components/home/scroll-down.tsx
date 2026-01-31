import { styled } from "@mui/material";
import React from "react";
import ScrollDownIndicator from "../../assets/scroll-down.svg";

const Wrapper = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "calc(100% - 100px)",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const ScrollDown = () => {
  return (
    <Wrapper>
      <a href="#about">
        <ScrollDownIndicator />
      </a>
    </Wrapper>
  );
};

export default ScrollDown;
