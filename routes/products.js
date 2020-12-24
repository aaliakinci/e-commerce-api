var express = require('express');
const { response } = require('../app');
var router = express.Router();


//Models 
const Product = require('../Models/Product');

// get all product
router.get('/', (req, res) => {
    const promise = Product.aggregate([
        {
            $lookup: {
                from: 'categories',
                localField: 'category_id',
                foreignField: '_id',
                as: 'category'
            }
        },
        {
            $unwind:
            {
                path: '$category',
                preserveNullAndEmptyArrays: true
            }
        },
    ]);
    promise.then((data)=>{
        res.json(data);
    }).catch((err)=>{
        res.json(err);
    })
});

//add product
router.post('/', (req, res) => {
    const product = new Product(req.body);
    const promise = product.save();
    promise.then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json(err);
    });
});

// update product 

router.put('/:product_id', (req, res) => {
    const param = req.params.product_id
    const promise = Product.findByIdAndUpdate(param, req.body, { new: true })
    promise.then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json(err)
    });
});

// delete product 

router.delete('/:product_id', (req, res) => {
    const promise = Product.findByIdAndDelete(req.params.product_id)
    promise.then((data) => {
        res.json({ status: 1 });
    }).catch((err) => {
        res.json(err)
    });
});


//top10 product
router.get('/best10', (req, res) => {
    const promise = Product.find({}).sort({ favs: -1 }).limit(10)
    promise.then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json(err);
    });
});

module.exports = router;
