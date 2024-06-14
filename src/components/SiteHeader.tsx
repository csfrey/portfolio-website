import { GitHub, LinkedIn, Menu as MenuIcon } from "@mui/icons-material";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import MediaQuery from "react-responsive";
import { linkedInUrl, githubUrl, offBlack, codeWarsUrl } from "../constants";
import { Sticky } from "react-sticky";
import CodeWarsIcon from "../widgets/CodeWarsIcon";

const drawerLinks = (
  <React.Fragment>
    <ListItem>
      <ListItemButton href="/portfolio">
        <ListItemText primary="Portfolio" />
      </ListItemButton>
    </ListItem>
    <ListItem>
      <ListItemButton href="/contact">
        <ListItemText primary="Contact" />
      </ListItemButton>
    </ListItem>
    <ListItem>
      <ListItemButton href={codeWarsUrl}>
        <CodeWarsIcon />
      </ListItemButton>
    </ListItem>
    <ListItem>
      <ListItemButton href={linkedInUrl}>
        <LinkedIn sx={{ color: "white" }} />
      </ListItemButton>
    </ListItem>
    <ListItem>
      <ListItemButton href={githubUrl}>
        <GitHub />
      </ListItemButton>
    </ListItem>
  </React.Fragment>
);

const SiteHeader = () => {
  const [open, setOpen] = useState(false);

  function toggleDrawer(newOpen: boolean) {
    return () => {
      setOpen(newOpen);
    };
  }

  return (
    <React.Fragment>
      <Sticky>
        {({ style }) => (
          <Box
            style={style}
            sx={{
              backgroundColor: offBlack,
              height: "5vw",
              minHeight: "100px",
              display: "flex",
              justifyContent: "space-between",
              padding: "1vw 1.5vw 1vw 2.5vw",
              boxSizing: "border-box",
            }}
          >
            <Box
              sx={{
                alignContent: "center",
                fontSize: "38px",
                cursor: "pointer",
              }}
              onClick={() => (window.location.href = "/")}
            >
              Charlie Frey
            </Box>
            <List
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                height: "100%",
                color: "white",
              }}
            >
              <MediaQuery minWidth={720}>{drawerLinks}</MediaQuery>
              <MediaQuery maxWidth={719}>
                <ListItem>
                  <MenuIcon onClick={toggleDrawer(true)} />
                </ListItem>
              </MediaQuery>
            </List>
          </Box>
        )}
      </Sticky>

      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 250,
            height: "100%",
            backgroundColor: "black",
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          <List sx={{ color: "white" }}>{drawerLinks}</List>
        </Box>
      </Drawer>
    </React.Fragment>
  );
};

export default SiteHeader;
