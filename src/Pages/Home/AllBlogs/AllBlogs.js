import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const AllBlogs = () => {
    const [blogs, setBlogs] = useState();


    useEffect(()=>{
        fetch('https://peaceful-sea-14435.herokuapp.com/blogs')
        .then(res => res.json())
        .then(data => setBlogs(data))
    } , [])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {blogs?.map((blog) => (
          <Grid item xs={2} sm={4} md={4} key={blog._id}>
              <img style={{width: '50%'}} src={blog.image} alt="" />
              <Typography>
                  {blog.title}
              </Typography>
              <Typography>
                  {blog.description}
              </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AllBlogs;
