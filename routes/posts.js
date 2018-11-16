const express = require('express');
const axios = require('axios');
const router = express.Router();

/* GET posts listing. */
router.get('/', (req, res, next) => {
  axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((result) => {
      res.render('posts/posts', { posts: result.data });
    })
    .catch(next);
});

/* Get single posts from user by user Id */
router.get('/search', (req, res, next) => {
  const userId = req.query.userId;
  if (!userId) {
    return res.render('posts/user-posts');
  }
  axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then((result) => {
      console.log(result);
      const data = {
        posts: result.data,
        userId
      };
      res.render('posts/user-posts', data);
    })
    .catch(next);
});

/* Get create post page */
router.get('/create', (req, res, next) => {
  res.render('posts/create-post');
});

router.post('/', (req, res, next) => {
  console.log(req.body);
  axios.post(`https://jsonplaceholder.typicode.com/posts`, req.body)
    .then((result) => {
      console.log(result.data);
      res.redirect('/posts');
    })
    .catch(next);
});

/* Get single post by id */
router.get('/:postId', (req, res, next) => {
  /* Get post id from params */
  const postId = req.params.postId;

  axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then((result) => {
      res.render('posts/postdetail', { post: result.data });
    })
    .catch(next);
});

module.exports = router;
