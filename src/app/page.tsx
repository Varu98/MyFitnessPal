"use client";
import Banner from "@/components/Home/Banner";
import ExcerciseCards from "@/components/Home/ExcerciseCards";
import { Box, Button, Typography } from "@mui/material";
import * as React from "react";

export default function HomePage() {
  return (
    <Box minHeight={"90vh"} bgcolor={"whitesmoke"}>
      <Banner />
      <ExcerciseCards />
    </Box>
  );
}
