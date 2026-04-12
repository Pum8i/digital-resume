import { Box, Divider, Typography } from "@mui/material";
import React from "react";

interface IData {
  sectionTitle: string;
  children: React.ReactNode;
  pb?: number;
  pt?: number;
}

export default function Section({ sectionTitle, children, pb, pt }: IData) {
  return (
    <Box sx={{ pb, pt }}>
      <Typography variant="h3" sx={{ textAlign: "left" }}>
        {sectionTitle}
      </Typography>
      <Divider variant="fullWidth" sx={{ mb: 1, bgcolor: "black" }} />
      {children}
    </Box>
  );
}
