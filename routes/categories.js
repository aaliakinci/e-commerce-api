var express = require('express');
var router = express.Router();

//Models 
const Category = require('../Models/Category');

// get all category 
router.get('/', (req, res) => {
  const promise = Category.find({});
  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  })
});

//add category
router.post('/', (req, res) => {
  const category = new Category(req.body);
    const promise = category.save();
    promise.then((data)=>{
      res.json(data);
    }).catch((err)=>{
      res.json(err);
    });
  
});

// get category by id 
router.get('/:category_id', (req, res) => {
    const param = req.params.category_id
    const promise = Category.findById(param)
    promise.then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json(err)
    });
});


// update category 

router.put('/:category_id', (req, res) => {
  const param = req.params.category_id
  const promise = Category.findByIdAndUpdate(param, req.body, { new: true })
  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err)
  });
});

// delete category 

router.delete('/:category_id', (req, res) => {
  const promise = Category.findByIdAndDelete(req.params.category_id)
  promise.then((data) => {
    res.json({status:1});
  }).catch((err) => {
    res.json(err)
  });
});



module.exports = router;
