import { Box } from "@mui/material";
import { fontSize } from "../constants";

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
        fontSize: fontSize.large,
        width: "30vw",
      }}
    >
      {title}
    </Box>
    <Box
      sx={{
        width: "50vw",
        fontSIze: fontSize.small,
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
        summary="Enhance your software engineering skills with personalized tutoring. With years of industry experience, I offer tailored sessions in coding, algorithms, and system design. Whether you're a beginner or looking to improve advanced skills, I provide clear explanations and guidance to support your learning. Let's work together to achieve your goals and advance your career in tech."
      />
      <Service
        id="consulting-engagements"
        title="Consulting"
        summary="Maximize your project's success with expert software consulting services. With extensive industry experience, I deliver high-quality solutions in software development and engineering. From initial planning to final implementation, I provide reliable, efficient, and tailored services to meet your specific needs. Let's collaborate to bring your vision to life and drive your business forward."
      />
      <Service
        id="full-time-work"
        title="Full-time Work"
        summary="Elevate your team's capabilities with a dedicated and experienced software engineer. With a strong background in software development and engineering, I bring a proven track record of delivering high-quality solutions. I excel in collaborative environments, ensuring seamless integration and effective communication. Let's work together to drive innovation and achieve your company's goals."
      />
    </Box>
  );
};

export default ServicesSummaries;
