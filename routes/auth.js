const express = require("express");
const url = require("url");
const User = require("../models/user");
const router = express.Router();

router.get("/registrationPage", (req, res) => {
  res.render("signUp");
});

router.post("/registration", (req, res) => {
  if (!req.body.userName || !req.body.password || !req.body.emailAddress) {
    return res.redirect(
      url.format({
        pathname: "/auth/registrationPage",
        query: {
          msg: "Empty Field :(",
        },
      })
    );
  }

  User.findOne({ userName: req.body.userName.trim() }, (err, existUser) => {
    if (err) {
      return res.redirect(
        url.format({
          pathname: "/auth/registrationPage",
          query: {
            msg: "Server Error :(",
          },
        })
      );
    }


    if (existUser) {
      return res.redirect(
        url.format({
          pathname: "/auth/registrationPage",
          query: {
            msg: "Username Already Exist :(",
          },
        })
      );
    }



  });

  new User({
    userName: req.body.userName,
    password: req.body.password,
    emailAddress: req.body.emailAddress,
  }).save(err => {
    if(err) {
      return res.redirect(
        url.format({
          pathname: "/auth/registrationPage",
          query: {
            msg: "Server error",
          },
        })
      );
    }

    res.redirect('/auth/loginPage')
  })
});

router.get("/loginPage", (req, res) => {
  res.render("login", { msg: req.query.msg });
});

router.post("/logIn", (req, res) => {
  if (!req.body.userName || req.body.password)
    return res.redirect(
      url.format({
        pathname: "/api/auth/registerPage",
        query: {
          msg: "Empty Field :(",
        },
      })
    );
});

module.exports = router;
