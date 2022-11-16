import { CssBaseline, styled, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.css";
import About from "./components/about";
import Contact from "./components/contact";
import Header from "./components/header/header";
import Home from "./components/home/home";
import Portfolio from "./components/portfolio";
import Skills from "./components/skills";
import { NavigationContextProvider } from "./context/NavigationContext";
import { theme } from "./theme/theme";

const Main = styled("main")(({ theme }) => ({
  backgroundColor: `${theme.palette.primary.superLight}`,
  paddingBottom: "50px",
  [theme.breakpoints.down("xs")]: {
    display: "flex",
    flexDirection: "column",
    gap: "4rem",
  },
}));

function App() {
  return (
    <NavigationContextProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <BrowserRouter>
          <Header />
          <Main>
            {/* <Routes>
              <Route path="/" element={<Home />} />
            </Routes> */}
            <Home />
            <About />
            <Skills />
            <Portfolio />
            <Contact />
          </Main>
        </BrowserRouter>
      </ThemeProvider>
    </NavigationContextProvider>
  );
}

export default App;
