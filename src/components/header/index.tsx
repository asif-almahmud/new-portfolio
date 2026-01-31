import { Container, lighten, styled } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useScrollSpyIndicator } from "../../context/ScrollSpyContext";
import { navOptions } from "../../lib/nav-options";
import ScrollIndicator from "../scroll-indicator";
import "./header.css";

const Wrapper = styled("header")(({ theme }) => ({
  minWidth: "calc(100vw - 16px)",
  backgroundColor: theme.palette.primary.contrastText,
  height: "66px",
  display: "flex",
  alignItems: "center",
  position: "sticky",
  top: 0,
  zIndex: 100,
}));

const ProgressBar = styled("div")(({ theme }) => ({
  // minWidth:"100vw",
  height: "100%",
}));

const NavOptionsContainer = styled("ul")(({ theme }) => ({
  display: "flex",
  gap: "4px",
  // height: "100%",
  // backgroundColor: theme.palette.primary.superLight,
  [theme.breakpoints.down(576)]: {
    justifyContent: "space-around",
  },
  [theme.breakpoints.down(330)]: {
    transform: "scale(0.85)",
  },
}));

const NavOption = styled("ul")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  // fontSize: var(--small-font-size);
  // fontWeight: var(--font-medium);
  height: "100%",
  padding: "6px 9px",
  textTransform: "capitalize",
  fontWeight: "500",
  fontSize: "13px",
  transition: "0ms",
  cursor: "pointer",
  "&>a": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: `${theme.palette.primary.main}`,
  },
  "&:hover": {
    color: `${theme.palette.primary.dark}`,
    backgroundColor: lighten(theme.palette.primary.superLight, 0.3),
    borderRadius: "10px",
  },
}));

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [elevated, setElevated] = useState(false);
  const { navOption } = useScrollSpyIndicator();

  const onScroll = () => {
    const scrolledFromDocumentTop = document.documentElement.scrollTop;

    if (scrolledFromDocumentTop > 0) {
      setElevated(true);
    } else {
      setElevated(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Wrapper
      sx={{
        boxShadow: elevated ? "0px 0px 12px gray" : "",
      }}
    >
      <ScrollIndicator />

      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link to={"/"} className="nav__logo">
          Asif
        </Link>
        <div className={showMenu ? "nav__menu show-menu" : "nav__menu"}>
          <NavOptionsContainer>
            {navOptions.map((item) => (
              <NavOption
                key={item.option}
                sx={{
                  color: (theme) =>
                    item.option === navOption
                      ? `${theme.palette.primary.dark}`
                      : `${theme.palette.primary.main}`,
                  backgroundColor: (theme) =>
                    item.option === navOption
                      ? lighten(theme.palette.primary.superLight, 0.3)
                      : theme.palette.primary.contrastText,
                  borderRadius: "10px",
                }}
                onClick={() => {
                  if (showMenu === true) {
                    setShowMenu(false);
                  }
                }}
              >
                <a href={`#${item.option}`}>
                  <i className={`uil ${item.icon}`}></i> {item.option}
                </a>
              </NavOption>
            ))}
          </NavOptionsContainer>

          <i
            className="uil uil-times nav__close"
            onClick={() => {
              setShowMenu(false);
            }}
          ></i>
        </div>

        <div
          className="nav__toggle"
          onClick={() => {
            setShowMenu((prev) => !prev);
          }}
        >
          <i className="uil uil-apps"></i>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Header;
