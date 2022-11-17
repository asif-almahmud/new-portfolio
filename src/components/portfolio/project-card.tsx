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
import { ThemedButton } from "../themed-button";
import SectionTitle from "../section-title";

interface IProjectCard {
  title: string;
  about: string;
  stack: string;
  image: string;
  live: string;
  github: string;
}

const ContentText = styled(Typography)(({ theme }) => ({
  fontWeight: "400",
  color: theme.palette.primary.dark,
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
      <CardContent
        sx={{
          padding: "15px 20px 20px 20px",
          display: "flex",
          flexDirection: "column",
          gap: "4px",
        }}
      >
        <Typography
          gutterBottom
          variant="h5"
          sx={{
            fontSize: "16px",
            fontWeight: "500",
            color: (theme) => theme.palette.primary.dark,
          }}
        >
          {title}
        </Typography>
        <ContentText gutterBottom variant="subtitle2">
          {about}
        </ContentText>
        <Box>
          <ContentText
            variant="h5"
            gutterBottom
            sx={{
              display: "inline",
              fontWeight: "500",
            }}
          >
            Stack<span style={{ marginLeft: "3px" }}>:&nbsp;</span>
          </ContentText>

          <ContentText
            gutterBottom
            variant="subtitle2"
            sx={{
              display: "inline",
            }}
          >
            {stack}
          </ContentText>
        </Box>
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
          <ThemedButton component="a" size="small" href={live} target="_blank">
            <i className="uil uil-globe"></i>
            Live
            <i className="uil uil-external-link-alt"></i>
          </ThemedButton>
          <ThemedButton
            component="a"
            size="small"
            href={github}
            target="_blank"
          >
            <i className="uil uil-github"></i>Github
            <i className="uil uil-external-link-alt"></i>
          </ThemedButton>
        </CardActions>
      </Box>
    </Card>
  );
};

export default ProjectCard;
