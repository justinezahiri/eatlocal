const express = require("express");
const passport = require('passport');
const router = express.Router();
const User = require("../models/User");

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;


router.get("/login", (req, res, next) => {
  res.render("auth/login", {
    "message": req.flash("error")
  });
});

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, theUser, failureDetails) => {
    if (err) {
      res.status(500).json({
        message: 'Something went wrong authenticating user'
      });
      return;
    }

    if (!theUser) {
      res.status(401).json(failureDetails); // `failureDetails` contains the error messages from our logic in "LocalStrategy" {message: '…'}.
      return;
    }

    // save user in session
    req.login(theUser, (err) => {
      if (err) {
        res.status(500).json({
          message: 'Session save went bad.'
        });
        return;
      }

      // We are now logged in (thats why we can also send req.user)
      res.status(200).json(theUser);
    });
  })(req, res, next);
});

router.post("/signup", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  const phone = req.body.phone;

  if (!username || !password || !email || !phone) {
    res.status(400).json({
      message: "Please complete all fields"
    });
    return;
  }

  User.findOne({
    username
  }, "username", (err, user) => {
    if (user !== null) {
      res.status(400).json({
        message: "The username already exists"
      });
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      password: hashPass
    });

    newUser.save()
      .then(() => {
        req.login(newUser, (err) => {
          if (err) {
            res.status(500).json({
              message: 'Login after signup went bad.'
            });
            return;
          }

          res.status(201).json(newUser);
        });
      })
      .catch(err => {
        res.status(500).json({
          message: "Something went wrong"
        });
      })
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.status(204).send();
});

router.get("/loggedin", (req, res, next) => {
  if (req.isAuthenticated()) { // req.isAuthenticated() is defined by passport
    res.status(200).json(req.user);
    return;
  }

  res.status(403).json({
    message: 'Unauthorized'
  });
});

// //CLOUDINARY UPLOADER
// const uploader = require('../cloudinary.js');
// router.post("/upload", uploader.single("photo"), (req, res, next) => {
//   // Check user is logged in
//   if (!req.isAuthenticated()) {
//     res.status(401).json({
//       message: "You need to be logged in to upload your avatar"
//     });
//     return;
//   }

//   // Check a file has been provided
//   if (!req.file) {
//     res.status(400).json({
//       message: "No file uploaded!"
//     });
//     return;
//   }

//   // Updating user's `image`
//   req.user.image = req.file.secure_url;

//   // Validating user before saving
//   req.user.validate(function (error) {
//     if (error) {
//       res.status(400).json({
//         message: error.errors
//       });
//       return;
//     }

//     // Validation ok, let save it
//     req.user.save(function (err) {
//       if (err) {
//         res.status(500).json({
//           message: 'Error while saving user into DB.'
//         });
//         return;
//       }

//       res.status(200).json(req.user);
//     })
//   });

// });

module.exports = router;