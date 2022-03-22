import React, { useEffect, useState } from 'react';
import { Grid, CircularProgress, AppBar, TextField } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { Button, Col, Container, Form, Row, Card } from 'react-bootstrap';
import axios from 'axios';
import Post from './Post/Post';
import useStyles from './styles';

const Posts = () => {
  const { post, isLoading = false } = useSelector((state) => state.posts);
  const [posts, setData] = useState([]);
  const [currentId, setCurrentId] = useState(0);
  // const [se, setSe] = useState(search);
  const [search, setSearch] = useState('all');
  console.log(JSON.stringify('posts', posts));
  const classes = useStyles();
  if (!posts.length && !isLoading) return 'No posts';
  useEffect(() => {
    axios.get(`http://localhost:8000/api/getposts`).then((res) => {
      const persons = res;
      // thissetState({ persons });
      setData(persons.data.posts);
    });
  }, []);

  const searchPost = () => {
    setSearch(search);
  };

  console.log('current id', currentId);
  const data = posts.filter((item) => item._id !== currentId);

  const searchdata = data.filter(
    (data) => search === 'all' || data.title.includes(search)
  );
  // console.log({ se });
  return (
    <>
      <Col className="mb-5">
        <AppBar position="static" color="inherit">
          <TextField
            name="search"
            variant="outlined"
            label="Search"
            // onKeyPress={handleKeyPress}
            fullWidth
            // defaultValue={search}
            // value=
            onChange={(e) => setSearch(e.target.value)}
          />
          {/* <ChipInput
                style={{ margin: '10px 0' }}
                value={tags}
                onAdd={handleAdd}
                onDelete={handleDelete}
                label="Search Tags"
                variant="outlined"
              /> */}
          <Button onClick={searchPost} variant="contained" color="primary">
            Search
          </Button>
        </AppBar>
      </Col>
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {searchdata.map((post) => (
          <Grid key={post._id} item xs={12} sm={12} md={6} lg={3}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Posts;
