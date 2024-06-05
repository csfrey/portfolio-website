import "./App.scss";
import { Box, createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
// TODO: move these into module structure
import { StickyContainer } from "react-sticky";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { offBlack } from "./constants";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import HomePage from "./pages/HomePage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";

const theme = createTheme({
  typography: {
    fontFamily: "PlayfairDisplay, PlayfairDisplay-Italic",
  },
  palette: {
    mode: "dark",
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/portfolio",
    element: <PortfolioPage />,
  },
]);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StickyContainer>
        <Box
          sx={{
            backgroundColor: offBlack,
            color: "white",
            fontFamily: "PlayfairDisplay",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box>
            <SiteHeader />
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              padding: "0 16vw",
            }}
          >
            <RouterProvider router={router} />
          </Box>
          <Box>
            <SiteFooter />
          </Box>
        </Box>
      </StickyContainer>
    </ThemeProvider>
  );
};

export default App;
