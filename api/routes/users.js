const express = require('express');
const router = express.Router();

//get all
router.get('/', (request, response) => {
  response.json([
    'João',
    'Lucas',
    'Michel',
    'Rodrigo'
  ])
}); 
   
module.exports = router;
