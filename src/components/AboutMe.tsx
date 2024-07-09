import { Box } from "@mui/material";
import { Suspense } from "react";
import WhiteLink from "../widgets/WhiteLink";
import { codeWarsUrl, fontSize } from "../constants";
// import headshot from '../images/headshot.jpeg'

const headshot = "https://i.imgur.com/NHf8ysU.jpeg";

const AboutMe = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          marginBottom: "6vw",
        }}
      >
        <Box
          sx={{
            marginRight: "4vw",
          }}
        >
          <Suspense>
            <img
              src={headshot}
              style={{
                height: "30vw",
                width: "30vw",
              }}
            />
          </Suspense>
        </Box>
        <Box>
          Right now, I'm based in Grove City, PA. I'm hoping to move back to
          Colorado Springs by the end of Summer 2024.
        </Box>
      </Box>
      <Box
        sx={{
          fontSize: fontSize.big,
          marginBottom: "20px",
          lineHeight: 1.6,
        }}
      >
        After getting my Bachelor's degree in Computer Engineering from the
        University of Dayton, I spent several years building software solutions
        in the public and private sectors.
      </Box>
      <Box sx={{ fontStyle: "italic" }}>
        Take a look at my new <WhiteLink href={codeWarsUrl}>CodeWars</WhiteLink>{" "}
        profile.
      </Box>
    </Box>
  );
};

export default AboutMe;
