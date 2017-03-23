const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');
const Article = require('../models/aticle');

const isAuthenticated = (req, res, next) => {
  if (req.user)
    next();
   else
     return res.json({ })
};

router.get('/articles', isAuthenticated(), (req,res) => {
  Articles.find();
  return res.json(req.article);

});

router.post("/articles", (req, res){
  let { url, categories, affiliation } = req.body
  new Article(url, categories, affiliation, (err, article)=>{
    if(err){
      console.log("err");

    }article.save((err, article){
      if(err)
      return res.status(500).json(err);
      return res.json(article)
    });
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
