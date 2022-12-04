import { alpha, Box, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      sx={{
        marginTop: "30px",
      }}
    >
      <Typography
        variant="caption"
        sx={{
          height: "28px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // backgroundColor: (theme) => alpha(theme.palette.secondary.main, 0.99),
          color: "black",
          // color: (theme) => theme.palette.primary.contrastText,
          // position: "relative",
          paddingRight: "20px",
          borderTop: "1px solid #ffffff22",
        }}
      >
        ~ Crafted by me ~
      </Typography>
      <Typography
        variant="h4"
        sx={{
          height: "70px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: (theme) => alpha(theme.palette.secondary.main, 0.85),
          color: (theme) => theme.palette.primary.contrastText,
          // position: "relative",
        }}
      >
        Many thanks for your time
      </Typography>
    </Box>
  );
};

export default Footer;
