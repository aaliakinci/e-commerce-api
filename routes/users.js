var express = require('express');
var router = express.Router();

const bcrypt = require('bcryptjs');



//Models 
const User = require('../Models/User');

// get all user
router.get('/', (req, res) => {
  const promise = User.find({});
  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  })
});

//add user
router.post('/', (req, res) => {
  const {username,name,surname,birthyear,password} = new User(req.body);
  bcrypt.hash(password, 8, (err, hash) => {
    const user = new User({
      username,
      password:hash,
      name,
      surname,
      birthyear
    });
    const promise = user.save();
    promise.then((data)=>{
      res.json(data);
    }).catch((err)=>{
      res.json(err);
    });
  });
});


//get user by id 

router.get('/:user_id', (req, res) => {
  const param = req.params.user_id
  const promise = User.findById(param)
  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err)
  });
});



// update user 

router.put('/:user_id', (req, res) => {
  const param = req.params.user_id
  const promise = User.findByIdAndUpdate(param, req.body, { new: true })
  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err)
  });
});

// delete user 

router.delete('/:user_id', (req, res) => {
  const promise = User.findByIdAndDelete(req.params.user_id)
  promise.then((data) => {
    res.json({status:1});
  }).catch((err) => {
    res.json(err)
  });
});


//old user 
router.get('/olduser', (req, res) => {
  const promise = User.find({}).sort({ createdAt: 1 }).limit(10)
  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
});

module.exports = router;
