import { Grid, Typography } from "@mui/material";
import React from "react";
import { blueGrey, orange } from "@mui/material/colors";

const Footer = () => {
  return (
    <Grid container spacing={2} sx={{mt: 8, backgroundColor: blueGrey[800], color: orange[700] }}>
      <Grid item xs={12} sm={12} style={{display: 'flex'}}>
        <Grid sm={3}>
          <Typography>travel@blogs.com</Typography>
          <Typography>www.TravelBlogs.com</Typography>
          <Typography>www.facebooke.com/ReavelsBlogs</Typography>
        </Grid>
        <Grid sm={3}>
          <Typography>Mobail: +088 19 333 333 22</Typography>
          <Typography>Phone: +088 19 333 333 22</Typography>
        </Grid>
        <Grid sm={3}>
        <Typography>Mobail: +088 19 333 333 22</Typography>
          <Typography>Phone: +088 19 333 333 22</Typography>
        </Grid>
        <Grid sm={3}>
        <Typography>Mobail: +088 19 333 333 22</Typography>
          <Typography>Phone: +088 19 333 333 22</Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12}>
      <p>
        &copy;{new Date().getFullYear()} City Guide App -All Rights Reserved
      </p>
      </Grid>
    </Grid>
  );
};

export default Footer;
