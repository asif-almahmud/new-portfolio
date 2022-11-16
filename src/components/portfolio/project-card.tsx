import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  darken,
  lighten,
  styled,
  Typography,
} from "@mui/material";
import { CTAButton } from "../cta-button";
import SectionTitle from "../section-title";

interface IProjectCard {
  title: string;
  about: string;
  stack: string;
  image: string;
  live: string;
  github: string;
}

const About = styled(Typography)(({ theme }) => ({
  fontWeight: "400",
  color: theme.palette.primary.dark,
  padding: "5px 10px 0px 10px",
  lineHeight: "24px",
  [theme.breakpoints.up("xs")]: {
    textAlign: "justify",
  },
}));

const TechStack = styled(Typography)(({ theme }) => ({
  fontWeight: "400",
  color: theme.palette.primary.dark,
  padding: "5px 10px 5px 10px",
  lineHeight: "24px",
  [theme.breakpoints.up("xs")]: {
    textAlign: "justify",
  },
}));

const ProjectCard = (props: IProjectCard) => {
  const { title, about, stack, image, live, github } = props;
  return (
    <Card sx={{ maxWidth: 345, borderRadius: "20px", position: "relative" }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt="green iguana"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          sx={{
            fontSize: "16px",
            fontWeight: "500",
            color: (theme) => theme.palette.primary.dark,
            padding: "10px 10px 0px 10px",
          }}
        >
          {title}
        </Typography>
        <About gutterBottom variant="body2">
          {about}
        </About>
        <TechStack gutterBottom variant="body2">
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              display: "inline",
              fontWeight: "500",
            }}
          >
            Stack<span style={{ marginLeft: "3px" }}>:&nbsp;</span>
          </Typography>

          {stack}
        </TechStack>
      </CardContent>
      <Box sx={{ width: "100%", height: "50px" }}></Box>
      <Box
        sx={{
          width: "100%",
          position: "absolute",
          bottom: "5px",
        }}
      >
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            padding: "10px 0 15px 0",
          }}
        >
          <CTAButton small href={live} target="_blank">
            <i className="uil uil-globe"></i>
            Live
            <i className="uil uil-external-link-alt"></i>
          </CTAButton>
          <CTAButton small href={github} target="_blank">
            <i className="uil uil-github"></i>Github
            <i className="uil uil-external-link-alt"></i>
          </CTAButton>
        </CardActions>
      </Box>
    </Card>
  );
};

export default ProjectCard;
