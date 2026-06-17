const express =  require('express');

const router = express.Router();

const {getAllUsers, getuserbyID , createUser} = require('../controllers/userController');


router.get('/',getAllUsers);

router.get('/:id', getuserbyID);

router.post('/',createUser);


module.exports = router;

// const express = require('express');
// const router = express.Router();

// router.get('/', (req, res) => {
//     res.send('Working');
// });

// module.exports = router;