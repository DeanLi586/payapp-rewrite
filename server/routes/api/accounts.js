const express = require('express');
const auth = require('../auth');
const router = express.Router();
const Account = require('../../models/account');
const _ = require('lodash');



/**
 * add a user account 
 * @param Account model
 */
router.post('/add', auth.required, (req, res) => {
    
    if(!req.body) {
        res.status(404).json({msg: 'Request body is missing'});
    }

    const { name, ownerID, number, provider } = _.pick(req.body, ['name', 'ownerID', 'number', 'provider']);

    let account = new Account({
        name,
        ownerID,
        number,
        provider
    })

    account.save()
    .then((doc) => {
        res.status(200).json(doc);
    })
    .catch((err) => {
        res.status(500).json(err);
    })
});


/**
 * Gets accounts based on the ownerID
 * @param ownerID
 */
router.get('/getAccounts', auth.required, (req, res) => {

    const id = req.params.id;

    Account.find({
        ownerID: id
    }).then((doc) => {
        res.status(200).json(doc);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    })
});


/**
 * Gets an account by it's id
 * @param _id
 */
router.get('/getAccountById', auth.required, (req, res) => {

    const id = req.params.id;

    Account.findById(id).then((doc) => {
        console.log(doc);
        res.status(200).json(doc);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    })

});


/**
 * update an account based on it's id and changes
 * @param _id
 * @param Account
 */
router.put('/updateAccount', auth.required, (req, res) => {
    const id = req.params.id;
    
    const {ownerID, name, number, provider } = _.pick(req.body, ['ownerID', 'name', 'number', 'provider']);
    
    let account = new Account({
        ownerID, 
        name, 
        number, 
        provider
    })

    // Account.findById(id).then((doc) => {
    //     let other = doc;
    //     other.
    // })

    Account.updateOne({
        _id: id
    }, account).then((doc) => {
        console.log(doc);
        res.status(200).json(doc);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    })
})


/**
 * Delete an account by it's ID
 * @param _id 
 */
router.delete('/account', auth.required, (req, res) => {
    const id = req.params.id;

    Account.deleteOne({_id: id}).then((doc) => {
        console.log(doc);
        res.status(200).json(doc);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    })
})

module.exports = router;