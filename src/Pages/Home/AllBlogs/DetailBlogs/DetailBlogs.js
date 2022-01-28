import { Button, Grid, Typography } from "@mui/material";
import { lightGreen } from "@mui/material/colors";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";

const DetailBlogs = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState();
  const { admin } = useAuth();

  useEffect(() => {
    fetch(`https://peaceful-sea-14435.herokuapp.com/blogs/${blogId}`)
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);
  
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12}>
        <Grid item xs={12} sm={6}>
          <Typography>
            <img style={{ width: "100%" }} src={blog?.image} alt="" />
          </Typography>
        </Grid>
        <Grid xs={12} sm={6}>
          <Typography>{blog?.title}</Typography>
          <Typography>{blog?.location}</Typography>
          <Typography>{blog?.info}</Typography>
          <Typography>{blog?.category}</Typography>
          <Typography>${blog?.cost}</Typography>
          <Typography>${blog?.description}</Typography>
          <NavLink style={{ textDecoration: "none" }} to='/home'>
              <Button sx={{ my: 3, backgroundColor: lightGreen[700] }}
                variant="contained">Back to home</Button>
          </NavLink>
          { admin && <NavLink style={{ textDecoration: "none", }} to={ `/update/${blog?._id}`}>
              <Button sx={{ my: 3, mx: 3, backgroundColor: lightGreen[700] }}
                variant="contained">Update</Button>
          </NavLink>}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DetailBlogs;
