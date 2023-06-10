const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const colors = require('colors');
const jwt = require('jsonwebtoken');
const passport = require('passport')
const bcrypt = require('bcrypt');
const saltRounds = 10;

const connectDatabase = require('./config/databaseConfig');
const User = require('./model/user.model');


require("dotenv").config();
const port = process.env.PORT || 3000;

app.use(passport.initialize());
require('./config/passport');
app.use(cors());
app.use(morgan('tiny'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



//* user registere route
app.post('/register', async (req, res) => {
  try {
    const newUser = await User.findOne({ username: req.body.username });
    if (newUser) {
      res.status(203).send('user is already exist!');
    } else {
      bcrypt.hash(req.body.password, saltRounds, async (err, hash) => {
        const newUser = new User({
          username: req.body.username,
          password: hash,
        });

        await newUser
          .save()
          .then((user) => {
            res.status(201).send({
              success: true,
              message: 'user is created successfully',
              user:{
                id: user._id,
                username: user.username,
              }
            });
          })
          .catch((err) => {
            res.status(400).send('user is not created : ' + err.message);
          });
      });
    }
  } catch (error) {
    res.status(500).send('Something went wrong!' + error.message);
  }
});


//* user login route
app.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({username: req.body.username})
        if(!user) {
          return res.status(401).send({
            success:false,
            message: "User not found",
          });
        }

        if(!bcrypt.compareSync(req.body.password, user.password))
        {
          return res.status(401).send({
            success:false,
            message: "password not matched",
          });
        }

       let payload = {
        id: user._id,
        username: user.username
       }
      
        const token = jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: '2d'})

        return res.status(200).send({
          success: true,
          message: 'user is logged in  successfully',
         token: "Bearer "+ token
        });

    } catch (error) {
      res.status(500).send("something went wrong in login process! "+error.message);
    }
});


//protected route
app.get('/profile', passport.authenticate('jwt', { session: false }),(req, res)=> {
        res.status(200).send({
          success: true,
          user:{
            id: req.user._id,
            username: req.user.username
          }
        })
    }
);


//unknow route 
app.use((req,res,next)=>{
  res.status(404).send("Unknown Route");
});


//server-side error

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })

app.listen(port, () => {
  console.log(`> Server is up and running on : http://localhost: ${port} `.green.bgWhite);
  connectDatabase();
});
