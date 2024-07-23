const express = require('express');
const { addTransaction, getAllTransaction, editTransaction, deleteTransaction } = require("../controllers/transactionCtrl");

// router object 
const router = express.Router();

// routes
// add transaction POST method 
router.post('/addTransaction', addTransaction);

// edit transaction POST method 
router.post('/editTransaction', editTransaction); 

// delete transaction POST method 
router.post('/deleteTransaction', deleteTransaction); 


// get transaction
router.post('/getTransaction', getAllTransaction);

module.exports = router;