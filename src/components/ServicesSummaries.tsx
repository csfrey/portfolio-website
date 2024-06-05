import { Box } from "@mui/material";
import { loremipsum } from "../constants";

const Service = ({
  id,
  title,
  summary,
}: {
  id: string;
  title: string;
  summary: string;
}) => (
  <Box
    id={id}
    sx={{
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      paddingTop: "6vw",
    }}
  >
    <Box
      sx={{
        fontSize: "calc(20px + 1vw)",
        width: "30vw",
      }}
    >
      {title}
    </Box>
    <Box
      sx={{
        width: "50vw",
        fontSIze: "calc(10px + 1vw)",
      }}
    >
      {summary}
    </Box>
  </Box>
);

const ServicesSummaries = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        marginBottom: "6vw",
      }}
    >
      <Service
        id="personal-tutoring"
        title="Personal Tutoring"
        summary={loremipsum}
      />
      <Service
        id="consulting-engagements"
        title="Consulting"
        summary={loremipsum}
      />
      <Service
        id="full-time-work"
        title="Full-time Work"
        summary={loremipsum}
      />
    </Box>
  );
};

export default ServicesSummaries;
