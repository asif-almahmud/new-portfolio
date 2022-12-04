import { Box, Container, styled } from "@mui/material";
import { identity } from "lodash";
import { ReactNode, useState, useEffect, useMemo } from "react";
import { useScrollSpyIndicator } from "../../context/ScrollSpyContext";
import { navOptions } from "../../lib/nav-options";

const SectionContainer = styled(Container)(({ theme }) => ({
  // minHeight: "100vh",
  minHeight: "calc(100vh - 66px)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  [theme.breakpoints.down("xs")]: {
    minHeight: 0,
  },
}));

const SpyElementOne = styled("div")(({ theme }) => ({
  minHeight: "calc(100vh - 66px)",
  width: "100%",
  position: "absolute",
  top: "0",
  left: "0",
  zIndex: "-10",
}));

const SpyElementTwo = styled("div")(({ theme }) => ({
  minHeight: "calc(100vh - 70px)",
  width: "100%",
  position: "absolute",
  bottom: "0",
  left: "0",
  zIndex: "-10",
}));

interface ISectionProps {
  children: ReactNode;
  id?: string;
}

const Section = ({ children, id }: ISectionProps) => {
  const [elementOne, setElementOne] = useState<Element | null>(null);
  const [elementTwo, setElementTwo] = useState<Element | null>(null);
  const { navOption, setNavOption } = useScrollSpyIndicator();

  const options = useMemo(() => {
    return {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };
  }, []);

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    const [entryOne, entryTwo] = entries;

    if (entryOne.isIntersecting) {
      setNavOption(id as string);
    }
    if (entryTwo.isIntersecting) {
      setNavOption(id as string);
    }
  };

  const observeTargetElement = (
    observer: IntersectionObserver,
    element: Element
  ) => {
    observer.observe(element);
  };

  const unobserveTargetElement = (
    observer: IntersectionObserver,
    element: Element
  ) => {
    observer.unobserve(element);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, options);
    if (elementOne && elementTwo) {
      console.log(elementOne);
      observeTargetElement(observer, elementOne);
      observeTargetElement(observer, elementTwo);
    }
    return () => {
      if (elementOne) unobserveTargetElement(observer, elementOne);
      if (elementTwo) unobserveTargetElement(observer, elementTwo);
    };
  }, [elementOne, elementTwo]);

  return (
    <SectionContainer id={id} maxWidth="md">
      <Box sx={{ height: "90px", width: "100%" }}></Box>
      <SpyElementOne ref={setElementOne}></SpyElementOne>
      <SpyElementTwo ref={setElementTwo}></SpyElementTwo>
      {children}
    </SectionContainer>
  );
};

export default Section;
