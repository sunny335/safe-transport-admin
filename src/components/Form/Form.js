import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import { useHistory } from 'react-router-dom';
import ChipInput from 'material-ui-chip-input';
import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    title: '',
    phone: '',
    price: '',
    location: '',
    message: '',
    tags: [],
    selectedFile: '',
    creatorId: '',
    nid: '',
  });
  const post = useSelector((state) =>
    currentId
      ? state.posts.posts.find((message) => message._id === currentId)
      : null
  );
  const userauth = useSelector((state) => state.userAuth);
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('publicUser'));
  console.log(postData.selectedFile);

  useEffect(() => {
    if (!post?.title) clear();
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({
      title: '',
      message: '',
      tags: [],
      selectedFile: '',
      phone: '',
      price: '',
      location: '',
      nid: '',
    });
  };

  const handleSubmit = async (e) => {
    console.log({ postData });
    e.preventDefault();
    postData.creatorId = userauth.user._id;
    if (currentId === 0) {
      dispatch(createPost({ ...postData, name: user?.firstName }, history));
      clear();
    } else {
      dispatch(updatePost(currentId, { ...postData, name: user?.firstName }));
      clear();
    }
  };
  // if (!user?.email) {
  //   return (
  //     <Paper className={classes.paper} elevation={6}>
  //       <Typography variant="h6" align="center">
  //         Please Sign in to create your Post
  //       </Typography>
  //     </Paper>
  //   );
  // }

  const handleAddChip = (tag) => {
    setPostData({ ...postData, tags: [...postData.tags, tag] });
  };

  const handleDeleteChip = (chipToDelete) => {
    setPostData({
      ...postData,
      tags: postData.tags.filter((tag) => tag !== chipToDelete),
    });
  };

  return (
    <Paper className={classes.paper} elevation={6}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? `Editing "${post?.title}"` : 'Creating a Post'}
        </Typography>
        <TextField
          required
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          required
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          required
          name="phone"
          variant="outlined"
          label="phone"
          fullWidth
          value={postData.phone}
          required
          onChange={(e) => setPostData({ ...postData, phone: e.target.value })}
        />
        <TextField
          required
          name="price"
          variant="outlined"
          label="price"
          fullWidth
          value={postData.price}
          required
          onChange={(e) => setPostData({ ...postData, price: e.target.value })}
        />
        <TextField
          required
          name="location"
          variant="outlined"
          label="location"
          fullWidth
          value={postData.location}
          required
          onChange={(e) =>
            setPostData({ ...postData, location: e.target.value })
          }
        />
        <TextField
          name="nid"
          variant="outlined"
          label="nid"
          fullWidth
          value={postData.nid}
          required
          onChange={(e) => setPostData({ ...postData, nid: e.target.value })}
        />
        <textarea
          required
          name="message"
          variant="outlined"
          label="details"
          fullWidth
          multiline
          rows={4}
          className="w-100"
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        {/* <div style={{ padding: '5px 0', width: '94%' }}>
          <ChipInput
            name="tags"
            variant="outlined"
            label="Tags"
            fullWidth
            value={postData.tags}
            onAdd={(chip) => handleAddChip(chip)}
            onDelete={(chip) => handleDeleteChip(chip)}
          />
        </div> */}
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
