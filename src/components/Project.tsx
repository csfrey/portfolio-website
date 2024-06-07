import { Box } from "@mui/material";
import WhiteLink from "../widgets/WhiteLink";

const Project = ({
  title,
  link,
  description,
  image,
  imageSourceText,
  floatRight = false,
}: {
  title: string;
  link: string;
  description: string;
  image: string;
  imageSourceText: string;
  floatRight?: boolean;
}) => {
  return (
    <Box
      className="project-box"
      sx={{
        marginBottom: "4vw",
      }}
    >
      <Box
        sx={{
          margin: "2vw",
          float: floatRight ? "right" : "left",
        }}
      >
        <img
          src={image}
          style={{
            height: "18vw",
          }}
        />
        <Box
          sx={{
            fontSize: "calc(6px + 0.5vw)",
            fontStyle: "italic",
            textAlign: "center",
          }}
        >
          source: {imageSourceText}
        </Box>
      </Box>
      <Box className="project-text">
        <Box
          sx={{
            fontSize: "calc(14px + 1vw)",
            marginBottom: "1vw",
          }}
        >
          {title}
        </Box>
        <Box
          sx={{
            fontSize: "calc(8px + 0.5vw)",
            marginBottom: "1vw",
          }}
        >
          {description}
        </Box>
        <Box
          sx={{
            marginBottom: "1vw",
            fontStyle: "italic",
          }}
        >
          <WhiteLink href={link}>Read more...</WhiteLink>
        </Box>
      </Box>
    </Box>
  );
};

export default Project;
