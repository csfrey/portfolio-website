import { Box, Link } from "@mui/material";
import React from "react";
import { Suspense } from "react";
import { Img } from "react-image";
import WhiteLink from "../widgets/WhiteLink";
// import headshot from '../images/headshot.jpeg'

const headshot = "https://i.imgur.com/NHf8ysU.jpeg";

const AboutMe = () => {
  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          marginBottom: '6vw'
        }}
      >
        <Box
          sx={{
            marginRight: "4vw",
          }}
        >
          <Suspense>
            <Img
              src={headshot}
              style={{
                height: "30vw",
                width: "30vw",
              }}
            />
          </Suspense>
        </Box>
        <Box>
          I'm currently based in Grove City, PA. I'm hoping to move back to
          Colorado Springs by the end of Summer 2024.
        </Box>
      </Box>
      <Box
        sx={{
          fontSize: "calc(20px + 1vw)",
          marginBottom: "20px",
          lineHeight: 1.6,
        }}
      >
        After getting my Bachelor's degree in Computer Engineering, I spent
        several years building software solutions in the public and private
        sector.
      </Box>
      <Box sx={{ fontStyle: "italic" }}>
        Take a look at my <WhiteLink>portfolio</WhiteLink>.
      </Box>
    </React.Fragment>
  );
};

export default AboutMe;