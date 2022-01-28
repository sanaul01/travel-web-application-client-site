import { Alert, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateBlog = () => {

    const { blogId } = useParams();
    const [blog, setBlog] = useState();
    const [addedSuccessfully, setAddedSuccessfully] = useState(false);
    const [loadingData, setLoadingData] = useState({});

    useEffect(() => {
        fetch(`https://peaceful-sea-14435.herokuapp.com/blogs/${blogId}`)
          .then((res) => res.json())
          .then((data) => setBlog(data));
      }, []);

    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoadingData = { ...loadingData };
        newLoadingData[field] = value;
        setLoadingData(newLoadingData);
        e.preventDefault();
    };

    const handleUpdate = e =>{
        // fetch(`http://localhost:5000/blogs/${blogId}`, 
        // {
        //     method: 'PUT',
        //     headers: {
        //         'content-type' : 'application/json'
        //     },
        //     body: JSON.stringify(blog)
        // })
        // .then()

        e.preventDefault();
    }

    console.log(blog?.title)

    return (
        <Container>
      <Grid container spacing={2}>
        <Grid item sx={{ mt: 6 }} xs={12} sm={12}>
          {addedSuccessfully && <Alert severity="success">Added successfully</Alert>}
          <Typography style={{fontWeight: 700, fontSize: 23}} variant="body1" gutterBottom>
            Update Blogs
          </Typography>
          <form onSubmit={handleUpdate}>
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              name="image"
              value={blog?.image}
              onBlur={handleOnBlur}
              variant="standard"
            />
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              name="title"
              type="text"
              value={blog?.title}
              onBlur={handleOnBlur}
              variant="standard"
            />
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              name="info"
              value={blog?.info}
              onBlur={handleOnBlur}
              type="text"
              variant="standard"
            />
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              name="description"
              value={blog?.description}
              onBlur={handleOnBlur}
              type="text"
              variant="standard"
            />
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              name="category"
              value={blog?.category}
              onBlur={handleOnBlur}
              type="text"
              variant="standard"
            />
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              name="cost"
              value={blog?.cost}
              onBlur={handleOnBlur}
              type="number"
              variant="standard"
            />
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              name="location"
              value={blog?.location}
              onBlur={handleOnBlur}
              type="text"
              variant="standard"
            />
            <Button
              sx={{ width: "75%", m: 1 }}
              type="submit"
              variant="contained"
            >
              Update
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
    );
};

export default UpdateBlog;