const express = require('express');
const { signup, login } = require('../controllers/authController');

const router = express.Router();



router.get('/',(req,res)=>{
    res.sendFile('C:\\Users\\1234\\Desktop\\RGI web 18may\\Lec23\\veiws\\home.html')
})

router.get('/signup',(req,res)=>{
    res.sendFile('C:\\Users\\1234\\Desktop\\RGI web 18may\\Lec23\\veiws\\signup.html')
})

router.get('/login',(req,res)=>{
    res.sendFile('C:\\Users\\1234\\Desktop\\RGI web 18may\\Lec23\\veiws\\login.html')
})



router.post('/signup', signup)

router.post('/login', login)











module.exports = router;