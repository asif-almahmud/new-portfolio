import { Box, styled, Typography } from "@mui/material";
import Send from "../../assets/send.svg";
import { theme } from "../../theme/theme";
import { ThemedButton } from "../themed-button";
import SectionTitle from "../section-title";

const Wrapper = styled("div")(({ theme }) => ({
  maxWidth: "450px",
  margin: "0 20px",
  [theme.breakpoints.down("sm")]: {
    maxWidth: "350px",
  },
  [theme.breakpoints.down("xs")]: {
    display: "flex",
    justifyContent: "center",
    maxWidth: "100%",
    margin: "0",
  },
}));

const Content = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "1.25rem",
  [theme.breakpoints.down("xs")]: {
    maxWidth: "100%",
    padding: "0 1.5rem",
    justifyContent: "center",
    alignItems: "center",
    "& h1, & h2, & p, & div": {
      textAlign: "center",
    },
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "3.5rem",
  lineHeight: 1.1,
  color: theme.palette.text.primary,
  marginBottom: "0.5rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "2.8rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "1.75rem",
  },
}));

const Subtitle = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "0.25rem",
  "& h2": {
    fontSize: "1.25rem",
    fontWeight: 600,
    color: theme.palette.primary.main,
    position: "relative",
    paddingLeft: "45px",
    display: "flex",
    alignItems: "center",
    "&::before": {
      content: '""',
      position: "absolute",
      left: 0,
      width: "35px",
      height: "1px",
      backgroundColor: theme.palette.text.secondary,
    },
  },
  "& p": {
    fontSize: "0.9rem",
    color: theme.palette.text.secondary,
    fontWeight: 500,
    marginLeft: "45px",
  },
  [theme.breakpoints.down("xs")]: {
    alignItems: "center",
    "& h2": {
      paddingLeft: 0,
      "&::before": {
        display: "none",
      },
    },
    "& p": {
      marginLeft: 0,
    },
  },
}));

const Description = styled("p")(({ theme }) => ({
  fontSize: "1.1rem",
  lineHeight: 1.6,
  color: theme.palette.text.secondary,
  maxWidth: "400px",
  [theme.breakpoints.down("xs")]: {
    maxWidth: "100%",
  },
}));

const Data = () => {
  return (
    <Wrapper>
      <Content>
        <Title variant="h1">Md. Asif Al-Mahmud</Title>
        <Subtitle>
          <Typography variant="h2">Software Engineer (Front-End)</Typography>
          <p>Based in Dhaka, Bangladesh</p>
        </Subtitle>
        <Description>
          Front-End Engineer experienced in the React ecosystem, specializing in
          developing responsive, performant, and user-centric web applications.
          Skilled in component-based architecture, modern state management, and
          reusable UI development.
        </Description>

        <Box sx={{ mt: 2 }}>
          <ThemedButton
            component="a"
            href="#contact"
            sx={{
              padding: "1.25rem 2.5rem",
              borderRadius: "1.5rem",
              fontSize: "1.1rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
              "&:hover": {
                transform: "translateY(-3px)",
                boxShadow: "0 15px 30px rgba(0,0,0,0.15)",
              },
              transition: "all 0.3s ease",
            }}
          >
            Say Hello
            <Send />
          </ThemedButton>
        </Box>
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
