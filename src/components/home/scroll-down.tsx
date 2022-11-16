import { styled } from "@mui/material";
import React from "react";
import ScrollDownIndicator from "../../assets/scroll-down.svg";

const Wrapper = styled("div")(({ theme }) => ({
  position: "absolute",
  bottom: "0",
  [theme.breakpoints.down("xs")]: {
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
