import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const CreateBlogs = () => {

    const [loadingData, setLoadingData] = useState({});


    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoadingData = { ...loadingData };
        newLoadingData[field] = value;
        setLoadingData(newLoadingData);
        e.preventDefault();
    };

    const handleOnSubmit = (e) => {
        const blog = {
            ...loadingData
        }
        
        fetch("http://localhost:5000/blogs", {
            method: "POST",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(blog)
        })
        .then(res => res.json())
        .then(data => {
            // alert method will be added here
            console.log(data)
        })
        e.preventDefault();
    };

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item sx={{ mt: 6 }} xs={12} sm={12}>
          <Typography variant="body1" gutterBottom>
            Create Blogs
          </Typography>
          <form onSubmit={handleOnSubmit}>
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Image Url"
              name="image"
              onBlur={handleOnBlur}
              variant="standard"
            />
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Title"
              name="title"
              type="text"
              onBlur={handleOnBlur}
              variant="standard"
            />
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Traveler Info"
              name="info"
              onBlur={handleOnBlur}
              type="text"
              variant="standard"
            />
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Description"
              name="description"
              onBlur={handleOnBlur}
              type="text"
              variant="standard"
            />
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Category"
              name="category"
              onBlur={handleOnBlur}
              type="text"
              variant="standard"
            />
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Cost"
              name="cost"
              onBlur={handleOnBlur}
              type="number"
              variant="standard"
            />
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Location"
              name="loaction"
              onBlur={handleOnBlur}
              type="text"
              variant="standard"
            />
            <Button
              sx={{ width: "75%", m: 1 }}
              type="submit"
              variant="contained"
            >
              Create Blogs
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CreateBlogs;
