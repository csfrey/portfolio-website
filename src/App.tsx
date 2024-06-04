import React, { useState } from "react";
import "./App.scss";
import { Box, createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
// TODO: move these into module structure
import { StickyContainer } from "react-sticky";
import { offBlack } from "./constants";
import SiteHeader from "./components/SiteHeader";
import SiteSummary from "./components/SiteSummary";
import AboutMe from "./components/AboutMe";
import ServicesSummaries from "./components/ServicesSummaries";
import SiteFooter from "./components/SiteFooter";

const theme = createTheme({
  typography: {
    fontFamily: "PlayfairDisplay, PlayfairDisplay-Italic",
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StickyContainer>
        <Box sx={{
          backgroundColor: offBlack,
          color: 'white',
          fontFamily: 'PlayfairDisplay'
        }}>
          <SiteHeader />
          <Box sx={{ padding: "0 16vw" }}>
            <SiteSummary />
            <AboutMe />
            <ServicesSummaries />
          </Box>
          <SiteFooter />
        </Box>
      </StickyContainer>
    </ThemeProvider>
  );
};

export default App;
