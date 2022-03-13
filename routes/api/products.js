const Product = require('../../db').Product
const route = require('express').Router()

route.get('/',(req,res)=>{

    Product.findAll()
    .then((products)=>{
        res.status(200).send(products)
    })
    .catch((error)=>{
        res.status(500).send({
            error: "Cannot retrieve product"
        })
    })
})

route.post('/',(req,res)=>{

    if(isNaN(parseFloat(req.body.price))){
        return res.status(403).send({
            error: "Price is not a valid number"
        })
    }
    Product.create({
        name: req.body.name,
        manufacturer: req.body.manufacturer,
        price: parseFloat(req.body.price)
    }).then((user)=>{
        res.status(201).send(user)
    })
    .catch((error)=>{
        res.status(501).send({
            error: "Cannot create product"
        })
    })
})

exports = module.exports = route