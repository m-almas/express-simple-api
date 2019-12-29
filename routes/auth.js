const express = require('express');
const router = express.Router();
const {authController} = require('../controllers/index')


router.post('/register', authController.registerUser)

router.post('/login', authController.loginUser)

module.exports = router

// async function encryptPassword(password) {
//     const salt = await bcrypt.genSalt(10);

//     return bcrypt.hash(password, salt);
// }

// async (req, res) => {
//     try {
//         const validated = await registerValidation(req.body);
//         const emailExists = await UserModel.findOne({ email: validated.email })
//         //checking if user is already in the database 
//         if (emailExists) return res.status(400).json({ message: 'User with this email already exists' })

//         //hashing password
//         const encryptedPassword = await encryptPassword(validated.password);

//         const user = new UserModel({
//             email: validated.email,
//             userName: validated.userName,
//             encryptedPassword: encryptedPassword,
//         });

//         const savedUser = await user.save();
//         res.json({ userId: savedUser._id });
//     } catch (error) {
//         res.json({ message: error.details[0].message });
//     }
// }

// async (req, res) => {
//     try {
//         const validated = await loginValidation(req.body);
//         const user = await UserModel.findOne({ email: validated.email });
//         //checking if email in the database 
//         if (!user) return res.status(400).json({ message: "Email or password incorrect" });
//         //Password correct
//         const validPass = await bcrypt.compare(validated.password, user.encryptedPassword);
//         if (!validPass) return res.status(400).json({ message: "Email or password incorrect" })
//         //Create and assign a token 
//         const token = jwt.sign({
//             _id: user._id
//         }, process.env.TOKEN_SECRET);
        
//         res.header('Authorization', token).json({ message: "successfully registered", token: token });
//     } catch (error) {
//         res.json({ message: error });
//     }
// }