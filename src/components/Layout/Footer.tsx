import React from "react";
import { Box, Typography, Link } from "@mui/material";
const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        marginTop: "1rem",
        backgroundColor: "#333",
        color: "#fff",
        textAlign: "center",
        py: 2,
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} My Fitness Pal. All rights reserved.
      </Typography>
      <Typography variant="body2">
        Built with love by{" "}
        <Link
          href="https://www.yourwebsite.com"
          target="_blank"
          rel="noopener noreferrer"
          underline="hover"
          color="inherit"
        >
          Vardaan Agarwal
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
