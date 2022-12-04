import {
  alpha,
  Box,
  Button,
  ButtonProps,
  styled,
  Tooltip,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState, useEffect } from "react";

const AnchorButton = styled(Button)<
  ButtonProps & {
    target?: string;
    component: string;
    rel: string;
  }
>(({ theme }) => ({
  fontSize: "40px",
  backgroundColor: alpha(theme.palette.secondary.main, 0.2),
  //   padding: "5px",
  width: "100px",
  height: "100px",
  borderRadius: "0px",
  color: theme.palette.secondary.main,
  //   backgroundColor: theme.palette.secondary.main,
  //   padding: "5px",
  [theme.breakpoints.down("xs")]: {
    fontSize: "24px",
    width: "70px",
    height: "70px",
  },
}));

const SocialContact = () => {
  const [text, setText] = useState("Click to copy email address");
  const theme = useTheme();
  const isSmallDevice = useMediaQuery(theme.breakpoints.down("sm"));
  const isXSmallDevice = useMediaQuery(theme.breakpoints.down("xs"));

  useEffect(() => {
    if (text === "Copied email address") {
      setTimeout(() => {
        setText("Click to copy email address");
      }, 5000);
    }
  }, [text]);
  return (
    <Box
      sx={{
        width: isSmallDevice ? null : "100%",
        display: "flex",
        flexDirection: "column",
        alignSelf: isSmallDevice ? "end" : null,
        transform: isSmallDevice ? "translateX(-100px)" : null,
      }}
    >
      <Box
        sx={{
          display: "flex",
          transform: isXSmallDevice ? "translateX(70px)" : null,
        }}
      >
        <AnchorButton
          component="a"
          href="https://www.linkedin.com/in/md-asif-al-mahmud-1b7690219/"
          target="_blank"
          rel="noreferrer"
          sx={{ borderRadius: isXSmallDevice ? "5px 0 0 0" : "5px 0 0 5px" }}
        >
          <i className="uil uil-linkedin"></i>
        </AnchorButton>
        <Tooltip title={text} placement="top">
          <AnchorButton
            component="a"
            // href="https://github.com/asif-almahmud"
            className="home__social-icon"
            // target="_blank"
            rel="noreferrer"
            sx={{ borderRadius: isXSmallDevice ? "0 5px 5px 0" : "0 5px 0 0" }}
            onClick={() => {
              navigator.clipboard.writeText("asifalmahmud1990@gmail.com");
              setText("Copied email address");
            }}
            // onMouseEnter={async()=>{const copiedText = await navigator.clipboard.readText();
            //   if(copiedText!==text || copiedText!== "Click to copy email address"){
            //     setText("Click to copy email address");
            //   }
            // }}
          >
            <i className="uil uil-envelope"></i>
          </AnchorButton>
        </Tooltip>
      </Box>
      <Box
        sx={{
          display: "flex",
          transform: isXSmallDevice ? "translateX(0px)" : "translateX(100px)",
        }}
      >
        <AnchorButton
          component="a"
          href="https://www.facebook.com/profile.php?id=100088089613140"
          className="home__social-icon"
          target="_blank"
          rel="noreferrer"
          sx={{ borderRadius: isXSmallDevice ? "5px 0 0 5px" : "0 0 0 5px" }}
        >
          <i className="uil uil-facebook-f"></i>
        </AnchorButton>
        <Tooltip title="Whatsapp no: 01756833947">
          <AnchorButton
            component="a"
            href="/"
            className="home__social-icon"
            target="_blank"
            rel="noreferrer"
            sx={{ borderRadius: isXSmallDevice ? "0 0 5px 0" : "0 5px 5px 0" }}
          >
            <i className="uil uil-whatsapp"></i>
          </AnchorButton>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default SocialContact;
