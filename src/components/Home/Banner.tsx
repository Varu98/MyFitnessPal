import { Box, Typography, Button, Stack } from "@mui/material";
import React from "react";
import HomeBannerAnimation from "./HomeBannerAnimation";

const Banner = () => {
  return (
    <Box
      sx={{
        marginTop: "1rem",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "1rem",
        justifyContent: "space-between",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "3rem",
          margin: "1rem",
          padding: "1rem",
        }}
      >
        <Typography variant={"h2"} sx={{ fontWeight: "bold" }}>
          Unleash Your Fitness Potential with My Fitness Pal
        </Typography>
        <Typography variant={"h6"}>
          Welcome to My Fitness Pal, your ultimate workout companion! Whether
          you're a fitness enthusiast or just starting your fitness journey,
          we've got you covered. Achieve your health and fitness goals with
          personalized workout plans designed just for you.
        </Typography>
        <Typography variant={"h6"}>
          It's time to embark on a transformative fitness experience, backed by
          cutting-edge AI recommendations tailored to your preferences and
          aspirations. Get ready to sweat, grow, and conquer with My Fitness
          Pal!
        </Typography>
        <Stack gap={"3rem"} direction={"row"}>
          <Button>Learn More...</Button>
          <Button variant={"contained"}>Get Started</Button>
        </Stack>
      </Box>
      <Box
        sx={{ display: "flex", marginLeft: "auto", marginRight: "2rem" }}
        maxWidth={"50rem"}
      >
        <HomeBannerAnimation />
      </Box>
    </Box>
  );
};

export default Banner;
