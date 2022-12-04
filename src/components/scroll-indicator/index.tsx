import { alpha, lighten, styled } from "@mui/material";
import React, { useEffect, useState } from "react";

const ProgressContainer = styled("div")(({ theme }) => ({
  minWidth: "100%",
  height: "3px",
  // height: theme.spacing(0.27),
  position: "absolute",
  top: "0%",
  left: "0%",
}));

const ProgressBar = styled("div")(({ theme }) => ({
  height: "100%",
}));

const ScrollIndicator = () => {
  const [showProgress, setShowProgress] = useState(false);
  const [scrolled, setScrolled] = useState(0);

  // The "documentElement" property returns a document's element (as an Element object). The documentElement is read-only. For HTML documents the returned object is the <html> element.

  // The difference between document.body and document.documentElement: document.body returns the <body> element, document.documentElement returns the <html> element

  // The "scrollTop" property sets or returns the number of pixels an element's content is scrolled vertically.

  // "scrollHeight" property retutns the entire height of an element

  // "clientHeight" property returns the viewable height of an element in pixels, including padding, but not the border, scrollbar or margin

  // So if we refer to the html element of an website and scroll all the way to the bottom the website then we can scroll through the html element upto -> it's length - height of the viewport

  const onScroll = () => {
    const scrolledFromDocumentTop = document.documentElement.scrollTop;
    const scrollableHeightOfTheDocument =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    if (scrolledFromDocumentTop > 0) {
      setShowProgress(true);
    } else {
      setShowProgress(false);
    }

    setScrolled(
      (scrolledFromDocumentTop / scrollableHeightOfTheDocument) * 100
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <ProgressContainer
      sx={{
        backgroundColor: (theme) =>
          showProgress ? lighten(theme.palette.primary.main, 0.9) : null,
      }}
    >
      <ProgressBar
        sx={{
          // backgroundColor: (theme) =>
          //   alpha(theme.palette.secondary.light, 0.55),
          // backgroundColor: "#9292b8",
          backgroundColor: "#ff8528a8",
          // backgroundColor: (theme) => theme.palette.secondary.light,
          width: `${scrolled}%`,
        }}
      ></ProgressBar>
    </ProgressContainer>
  );
};

export default ScrollIndicator;
// #A09FB6
