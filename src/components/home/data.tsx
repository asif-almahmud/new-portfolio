import { Box, styled, Typography } from "@mui/material";
import Send from "../../assets/send.svg";
import { theme } from "../../theme/theme";
import { ThemedButton } from "../themed-button";
import SectionTitle from "../section-title";

const Wrapper = styled("div")(({ theme }) => ({
  maxWidth: "400px",
  margin: "0 20px",
  [theme.breakpoints.down("sm")]: {
    maxWidth: "300px",
  },
  [theme.breakpoints.down("xs")]: {
    display: "flex",
    justifyContent: "center",
    maxWidth: "100%",
  },
}));

const Content = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  [theme.breakpoints.down("xs")]: {
    maxWidth: "400px",
    justifyContent: "center",
    alignItems: "center",
    "&>h1,div,p": {
      textAlign: "center",
    },
    // "& p": {
    //   textAlign: "center",
    // },
  },
}));

const Data = () => {
  return (
    <Wrapper>
      <Content>
        <Typography variant="h1">Asif Al Mahmud</Typography>
        <div>
          <Typography variant="h2">Frontend Engineer</Typography>
          <p>Based in Dhaka, Bangladesh</p>
        </div>
        <p className="home__description">
          {/* I love to work with TypeScript, ReactJS, NextJS, MUI, Vanilla CSS and
        SASS.  */}
          I love to create or contribute in beautiful, creative and useful
          applications using ReactJS library or NextJS framework.
        </p>

        <ThemedButton component="a" href="#contact">
          Say Hello&nbsp;
          <Send />
        </ThemedButton>
      </Content>
    </Wrapper>
  );
};

export default Data;

/* # buttons */
// .btn {
//   display: inline-block;
//   background-color: var(--text-color);
//   color: var(--container-color);
//   padding: 1rem 1.75rem;
//   border-radius: 1rem;
//   font-weight: var(--font-medium);
//   transition: 400ms;
// }

// .btn:hover {
//   background-color: var(--text-color-dark);
// }

// .btn__icon {
//   margin-left: var(--m-0-50);
// }

// .btn--flex {
//   width: max-content;
//   display: inline-flex;
//   align-items: center;
//   gap: 4px;
