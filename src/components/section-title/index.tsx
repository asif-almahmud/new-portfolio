import { alpha, styled, Typography } from "@mui/material";

const SectionTitle = styled(Typography)(({ theme }) => ({
  position: "relative",
  "&::after": {
    content: `""`,
    position: "absolute",
    left: "50%",
    bottom: "-8px",
    width: "100%",
    height: "7px",
    transform: "skew(-18deg) translateX(-50%)",
    // backgroundColor: "#49497567",
    backgroundColor: alpha(theme.palette.secondary.main, 0.5),
    // backgroundColor: "rgba(238,111,87,0.5)",
    // zIndex: -1,
  },
}));

export default SectionTitle;
