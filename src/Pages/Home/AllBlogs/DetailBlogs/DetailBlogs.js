import { Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DetailBlogs = () => {
    const {blogId} = useParams();
    const [blog, setBlog] = useState();


    useEffect(()=>{
        fetch(`https://peaceful-sea-14435.herokuapp.com/blogs/${blogId}`)
        .then(res =>res.json())
        .then(data => setBlog(data))
    } , [])
    console.log(blog)
    return (    
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                    <Grid item xs={12} sm={6}>
                        <Typography>
                            <img style={{width: '100%'}} src={blog?.image} alt="" />
                        </Typography>
                    </Grid>
                    <Grid xs={12} sm={6}>
                        <Typography>
                            {blog?.title}
                        </Typography>
                        <Typography>
                            {blog?.loaction}
                        </Typography>
                        <Typography>
                            {blog?.info}
                        </Typography>
                        <Typography>
                            {blog?.category}
                        </Typography>
                        <Typography>
                            ${blog?.cost}
                        </Typography>
                        <Typography>
                            ${blog?.description}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
    );
};

export default DetailBlogs;