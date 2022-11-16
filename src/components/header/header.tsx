import { Container, lighten, styled } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
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
  height: "100%",
  // backgroundColor: theme.palette.primary.superLight,
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

const navOptions = [
  { option: "home", icon: "uil-estate" },
  { option: "about", icon: "uil-user" },
  { option: "skills", icon: "uil-file-alt" },
  { option: "portfolio", icon: "uil-scenery" },
  { option: "contact", icon: "uil-message" },
];

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  window.onscroll = function () {
    myFunction();
  };

  function myFunction() {
    var winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    var height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    // document.getElementById("myBar").style.width = scrolled + "%";
  }

  return (
    <Wrapper>
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
              <NavOption key={item.option}>
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
            setShowMenu(true);
          }}
        >
          <i className="uil uil-apps"></i>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Header;
