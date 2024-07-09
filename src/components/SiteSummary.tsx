import { Box } from "@mui/material";
import WhiteLink from "../widgets/WhiteLink";
import { fontSize } from "../constants";

const SiteSummary = () => {
  return (
    <Box
      sx={{
        padding: "10vw 0",
        marginBottom: "5vw",
      }}
    >
      <Box
        sx={{
          fontSize: fontSize.huge,
          marginBottom: "20px",
          lineHeight: 1.6,
        }}
      >
        My name is Charlie Frey. I'm a Software Engineer and Technical Lead with
        over four years of industry experience.
      </Box>
      <Box sx={{ fontStyle: "italic" }}>
        I'm currently available for{" "}
        <WhiteLink href="#personal-tutoring">personal tutoring</WhiteLink>,{" "}
        <WhiteLink href="#consulting-engagements">
          consulting engagements
        </WhiteLink>
        , and <WhiteLink href="#full-time-work">full-time work</WhiteLink>.
      </Box>
    </Box>
  );
};

export default SiteSummary;
