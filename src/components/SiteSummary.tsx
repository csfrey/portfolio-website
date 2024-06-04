import { Box, Link } from "@mui/material";
import WhiteLink from "../widgets/WhiteLink";

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
          fontSize: "calc(30px + 1vw)",
          marginBottom: "20px",
          lineHeight: 1.6,
        }}
      >
        My name is Charlie Frey. I'm a Software Engineer and Technical Lead with
        over four years of industry experience.
      </Box>
      <Box sx={{ fontStyle: "italic" }}>
        I'm currently available for <WhiteLink>personal tutoring</WhiteLink>,{" "}
        <WhiteLink>consulting engagements</WhiteLink>, and{" "}
        <WhiteLink>full-time work</WhiteLink>.
      </Box>
    </Box>
  );
};

export default SiteSummary;
