const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');
const Article = require('../models/article');

// const isAuthenticated = (req, res, next) => {
//   if (req.article)
//     next();
//    else
//      return res.json({ })
// };

router.get('/', (req,res) => {
  Article.find((err, articles) =>{
    if (err) {
      console.log(err)
    } else {
      console.log(articles)
      res.json(articles);
    }

  });
});

router.post("/", (req, res) => {
  new Article({
    url: req.body.url,
    categories: req.body.categories,
    affiliation: req.body.affiliation
  }).save( (err, article) => {
    if(err) {
      console.log(err);
    }
    res.json(article);
  });
});

module.exports = router;
// router.post('/signup', (req, res) => {
//   let { email, password } = req.body;
//   User.register(new User({username: email}), password, (err, user) => {
//     if (err)
//       return res.status(500).json(err);
//
//     user.save( (err, user) => {
//       if (err)
//         return res.status(500).json(err);
//       return res.json(user)
//     });
//   });
// });
