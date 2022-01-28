import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const AllBlogs = () => {
    const [blogs, setBlogs] = useState();
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);


    const size = 10;

    useEffect(()=>{
        fetch(`https://peaceful-sea-14435.herokuapp.com/blogs?page=${page}&&size=${size}`)
        .then(res => res.json())
        .then(data => {
          setBlogs(data.blogs)
          const count = data.count;
          const pageNumber = Math.ceil(count / size);
          setPageCount(pageNumber);
        })
    } , [page])

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
              <NavLink to={`/details/${blog._id}`}>
                <Button>Details</Button>
              </NavLink>
          </Grid>
        ))}
      </Grid>
      <Grid className="pagination">
          {[...Array(pageCount).keys()].map((number) => (
            <button
              className={number === page ? "selected" : ""}
              key={number}
              onClick={() => setPage(number)}
            >
              {number}
            </button>
          ))}
        </Grid>
    </Box>
  );
};

export default AllBlogs;
