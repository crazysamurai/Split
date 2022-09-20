import React from "react";
import { Grid } from "@mui/material";
import { Container, Box } from "@mui/system";

const Main = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#F0F0F2",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "Center",
        alignItems: "center",
      }}
    >
      <Container
        sx={{
          backgroundColor: "#CEF2F2",
          height: "50vh",
          width: "50vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid container spacing={2} columns={16} sx={{}}>
          <Grid item xs={12} sm={6}>
            <Box bgcolor="red"> ITEM </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box bgcolor="red"> ITEM </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Main;
