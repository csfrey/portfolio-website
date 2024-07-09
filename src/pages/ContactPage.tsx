import { Box, Button, TextField } from "@mui/material";
import { sendForm } from "emailjs-com";
import React, { useState } from "react";
import WhiteLink from "../widgets/WhiteLink";
import { fontSize } from "../constants";

const inputStyles = {
  marginBottom: "4vh",
};

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  function sendEmail(e: any) {
    e.preventDefault();
    setSubmitted(true);

    sendForm(
      process.env.REACT_APP_EMAIL_SERVICE_ID,
      process.env.REACT_APP_EMAIL_TEMPLATE_ID,
      e.target,
      process.env.REACT_APP_EMAIL_USER_ID
    );

    console.log("submitted");
  }

  const thanks = (
    <Box
      sx={{
        fontSize: fontSize.large,
        textAlign: "center",
        marginBottom: "8vh",
      }}
    >
      Thank you!
    </Box>
  );

  const contactForm = (
    <React.Fragment>
      <Box sx={{ textAlign: "center" }}>
        Email me at{" "}
        <WhiteLink href="mailto:charliesagefrey95@gmail.com">
          charliesagefrey95@gmail.com
        </WhiteLink>
      </Box>
      <Box
        sx={{
          textAlign: "center",
          margin: "2vh 0 1vh 0",
        }}
      >
        or
      </Box>
      <Box
        sx={{
          fontSize: fontSize.large,
          textAlign: "center",
          marginBottom: "4vh",
        }}
      >
        Write me a message!
      </Box>
      <Box
        component="form"
        onSubmit={sendEmail}
        autoComplete="off"
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          padding: "0 20vw",
        }}
      >
        <TextField sx={inputStyles} name="from_name" label="Name" required />
        <TextField
          sx={inputStyles}
          name="email"
          label="Email"
          helperText="I'll never share your email"
          required
        />
        <TextField
          sx={inputStyles}
          name="phone_number"
          label="Phone number"
          helperText="I'll never share your number either"
        />
        <TextField
          sx={inputStyles}
          name="message"
          label="Message"
          multiline
          required
        />
        <Button variant="outlined" type="submit">
          Send
        </Button>
      </Box>
    </React.Fragment>
  );

  return submitted ? thanks : contactForm;
};

export default ContactPage;
