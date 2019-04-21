const mongoose = require('mongoose');
const passport = require('passport');
const auth = require('../auth');
const express = require('express');
const router = express.Router();
const User = require('../../models/user');
const _ = require('lodash');
const httpErrors = require('http-errors');
const Account = require('../../models/account');


router.post('/register-parent', (req, res, next) => {

    if(!req.body) {
        res.status(401).send({msg: 'Request body is empty'});
    }

    const {email, password, fullname, username, phoneNumber} = _.pick(req.body, ['email', 'password', 'fullname', 'username', 'phoneNumber']);

    let finalUser = new User({
        email,
        fullname,
        username,
        phoneNumber
    })

    finalUser.setPassword(password);
    finalUser.role = 'parent';

    finalUser.save()
    .then(() => {
        res.status(200).json(finalUser.toAuthJSON());
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})

router.post('/register-school', (req, res, next) => {

    if(!req.body) {
        res.status(401).send({msg: 'Request body is empty'});
    }

    const {email, password, fullname, username, phoneNumber} = _.pick(req.body, ['email', 'password', 'fullname', 'username', 'phoneNumber']);

    let finalUser = new User({
        email,
        fullname,
        username,
        phoneNumber
    })

    finalUser.setPassword(password);
    finalUser.role = 'school';

    finalUser.save()
    .then(() => {
        res.status(200).json(finalUser.toAuthJSON());
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})

router.post('/login', auth.optional,(req, res, next) => {

    const { email, password } = _.pick(req.body, ['email', 'password']);

    if(!email || !password) {
        return res.status(422).json({
            err: 'email or password is missing'
        })
    }

    return passport.authenticate('local', {session: false}, (err, passportUser, info) => {
        if(err) {
            console.log(err);
            return next(err);
        }

        if(passportUser) {
            const user = passportUser;
            user.token = passportUser.generateJWT();
            
            res.json(user.toAuthJSON());
        }

        res.status(400).json(info);
    })(req, res, next);

});

router.get('/getAllSchools', auth.optional, (req, res) => {
    let schoolArray = [];
    
    User.find({
        role: 'parent'
    }).then((doc) => {
        if(doc.length === 0) {
            res.status(200).json({msg: 'There are currently no schools available'})
        }else {
            doc.forEach(element => {
                schoolArray.push(element.toJSON())
            });
            res.status(200).json(schoolArray);
        }
        
    }).catch((err) => {
        res.status(500).json(err);
    })
})

module.exports = router;