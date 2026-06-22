const User = require('../model/user');
const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');




const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ message: 'user Already exist' })
        }


        const hashedpassword = await bcrypt.hash(password, 10);

        const newuser = await User.create({
            name,
            email,
            password:hashedpassword
        })


        res.status(201).json({ message: 'user created', newuser });
    }
    catch (err) {
        console.log(err);
    }
}


const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'user not  found' })
        }

        // if (password !== user.password) {
        //     return res.status(401).json({ message: 'Wrong password' })
        // }

        const match = bcrypt.compare(password, user.password);

        if(!match) return res.status(401).json({message:'wrong Password'});


        res.status(200).json({ message: 'Login succesfully', user });
    }
    catch (err) {
        console.log(err);
    }
}


module.exports = { signup, login };