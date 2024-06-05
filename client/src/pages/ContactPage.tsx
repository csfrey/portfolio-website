import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";

const inputStyles = {
  marginBottom: "4vh",
};

const ContactPage = () => {
  const [inputs, setInputs] = useState<any>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(k: string, e: any) {
    setInputs({
      ...inputs,
      [k]: e.target.value,
    });
  }

  function handleSubmit() {
    if (inputs.name && inputs.email && inputs.message) {
      setSubmitted(true);
      fetch("/api/message-me", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      });
    }
  }

  return submitted ? (
    <Box
      sx={{
        fontSize: "30px",
        textAlign: "center",
        marginBottom: "8vh",
      }}
    >
      Thank you!
    </Box>
  ) : (
    <React.Fragment>
      <Box
        sx={{
          fontSize: "30px",
          textAlign: "center",
          marginBottom: "8vh",
        }}
      >
        Write me a message!
      </Box>
      <Box
        component="form"
        autoComplete="off"
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          padding: "0 20vw",
        }}
      >
        <TextField
          sx={inputStyles}
          id="name-input"
          label="Name"
          required
          onChange={(e) => handleChange("name", e)}
        />
        <TextField
          sx={inputStyles}
          id="email-input"
          label="Email"
          helperText="I'll never share your email"
          required
          onChange={(e) => handleChange("email", e)}
        />
        <TextField
          sx={inputStyles}
          id="phone-input"
          label="Phone number"
          helperText="I'll never share your number either"
          onChange={(e) => handleChange("number", e)}
        />
        <TextField
          sx={inputStyles}
          id="message-input"
          label="Message"
          multiline
          required
          onChange={(e) => handleChange("message", e)}
        />
        <Button variant="outlined" onClick={handleSubmit}>
          Send
        </Button>
      </Box>
    </React.Fragment>
  );
};

export default ContactPage;
