import {
  alpha,
  Box,
  CssBaseline,
  styled,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.css";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import GoToTop from "./components/GoToTop";
import Header from "./components/header/header";
import Home from "./components/home/home";
import Portfolio from "./components/portfolio";
import SectionTitle from "./components/section-title";
import Skills from "./components/skills";
import { ScrollSpyContextProvider } from "./context/ScrollSpyContext";
import { theme } from "./theme/theme";

const Main = styled("main")(({ theme }) => ({
  backgroundColor: `${theme.palette.primary.superLight}`,
  // position: "relative",
  // paddingBottom: "50px",
  [theme.breakpoints.down("xs")]: {
    display: "flex",
    flexDirection: "column",
    gap: "4rem",
  },
}));

function App() {
  return (
    <ScrollSpyContextProvider>
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
            <Footer />
            <GoToTop />
          </Main>
        </BrowserRouter>
      </ThemeProvider>
    </ScrollSpyContextProvider>
  );
}

export default App;
