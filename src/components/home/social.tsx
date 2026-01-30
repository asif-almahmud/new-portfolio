import { alpha, styled } from "@mui/material";
import React from "react";

type Props = {};

const Wrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "1.5rem",
  [theme.breakpoints.down("xs")]: {
    flexDirection: "row",
    gap: "2rem",
    width: "100%",
    justifyContent: "center",
  },
}));

const SocialLink = styled("a")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "40px",
  height: "40px",
  borderRadius: "12px",
  backgroundColor: alpha(theme.palette.primary.main, 0.05),
  color: theme.palette.primary.main,
  fontSize: "20px",
  transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    transform: "translateY(-5px) rotate(8deg)",
    boxShadow: `0 10px 20px ${alpha(theme.palette.primary.main, 0.2)}`,
  },
}));

const Social = (props: Props) => {
  return (
    <Wrapper>
      <SocialLink
        href="https://www.linkedin.com/in/md-asif-al-mahmud-1b7690219/"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        <i className="uil uil-linkedin-alt"></i>
      </SocialLink>
      <SocialLink
        href="https://github.com/asif-almahmud"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        <i className="uil uil-github-alt"></i>
      </SocialLink>
      <SocialLink
        href="https://www.facebook.com/profile.php?id=100088089613140"
        target="_blank"
        rel="noreferrer"
        aria-label="Facebook"
      >
        <i className="uil uil-facebook-f"></i>
      </SocialLink>
    </Wrapper>
  );
};

export default Social;
