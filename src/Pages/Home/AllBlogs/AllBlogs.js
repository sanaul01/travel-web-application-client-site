import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { lightGreen } from "@mui/material/colors";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState();
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  const size = 9;

  useEffect(() => {
    fetch(
      `https://peaceful-sea-14435.herokuapp.com/blogs?page=${page}&&size=${size}`
    )
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data.blogs);
        const count = data.count;
        const pageNumber = Math.ceil(count / size);
        setPageCount(pageNumber);
      });
  }, [page]);

  return (
    <Container>
      <Box sx={{ flexGrow: 1, mt: 8 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {blogs?.map((blog) => (
            <Grid
              item
              xs={2}
              sm={4}
              md={4}
              key={blog._id}
              sx={{ "&:hover": { boxShadow: 3 } }}
            >
              <img
                style={{ width: "90%", height: "250px", borderRadius: "10px" }}
                src={blog.image}
                alt=""
              />
              <Typography
                style={{
                  fontWeight: 700,
                  marginBottom: "20px",
                }}
              >
                {blog.title}
              </Typography>
              <Typography
                style={{
                  textAlign: "left",
                }}
              >
                {blog.description.slice(0, 150)}
              </Typography>
              <NavLink
                style={{
                  textDecoration: "none",
                }}
                to={`/details/${blog._id}`}
              >
                <Button
                  sx={{ my: 3, backgroundColor: lightGreen[700] }}
                  variant="contained"
                >
                  Details
                </Button>
              </NavLink>
            </Grid>
          ))}
        </Grid>
        <Grid className="pagination" sx={{ mt: 8 }}>
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
    </Container>
  );
};

export default AllBlogs;
