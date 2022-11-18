import { alpha, styled } from "@mui/material";
import React from "react";

type Props = {};

const Wrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "6px",
}));

const SocialIcon = styled("i")(({ theme }) => ({
  fontSize: "22px",
  color: alpha(theme.palette.primary.main, 0.85),
  transition: "50ms ease-in-out",
  "&:hover": {
    color: theme.palette.primary.dark,
  },
}));

const Social = (props: Props) => {
  return (
    <Wrapper>
      <a
        href="https://www.linkedin.com/in/md-asif-al-mahmud-1b7690219/"
        target="_blank"
        rel="noreferrer"
      >
        <SocialIcon className="uil uil-linkedin-alt"></SocialIcon>
      </a>
      <a
        href="https://github.com/asif-almahmud"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <SocialIcon className="uil uil-github-alt"></SocialIcon>
      </a>
      <a
        href="/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <SocialIcon className="uil uil-facebook-f"></SocialIcon>
      </a>
    </Wrapper>
  );
};

export default Social;
