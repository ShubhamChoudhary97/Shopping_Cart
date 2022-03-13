const User = require('../../db').User
const route = require('express').Router()

route.get('/',(req,res)=>{
    //For getting array of users from database
    User.findAll()
    .then((users)=>{
        res.status(200).send(users)
    })
    .catch((error)=>{
        res.status(500).send({
            error: "Could not retrieve user"
        })
    })
})
route.post('/',(req,res)=>{
    //We will expect req to have name in it
    //We will create new user here
    User.create({
        name: req.body.name
    }).then((user)=>{
        res.status(201).send(user)
    })
    .catch((error)=>{
        res.status(501).send({
            error: "Could not add user"
        })
    })
})
exports = module.exports = route