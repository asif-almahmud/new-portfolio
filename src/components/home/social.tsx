import { styled } from "@mui/material";
import React from "react";

type Props = {};

const Wrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));

const SocialIcon = styled("i")(({ theme }) => ({
  fontSize: "1.25rem",
  color: theme.palette.primary.light,
  transition: "300ms ease-in-out",
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
