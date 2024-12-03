import { Router } from "express";
import Signup from "../schema/SignUp";
const router = Router();
router.post("/", async (req, res) => {
    try {
        const { username, email, ExternalId, fullname } = req.body;
        // Check if user already exists
        const findUser = await Signup.findOne({ _id: ExternalId });
        if (findUser) {
            return res.status(400).json({
                status: "User Already Exist!",
                response: {},
                error: "User already exists.",
            });
        }
        const register = await Signup.create({
            _id: ExternalId,
            username,
            email,
            fullname
        });
        return res.status(201).json({
            status: "Success",
            response: {
                data: register._id,
            },
        });
    }
    catch (error) {
        console.error("Error:", error);
        return res.status(500).json({
            status: "Failed",
            response: {},
            error: error.message,
        });
    }
});
export default router;
//import { Request, Router, Response } from "express";
// import { hashPassword } from "../services/HashedPassword";
// import Signup from "../schema/SignUp";
// import jwt from 'jsonwebtoken';
// const router = Router();
// router.post("/", async (req: Request, res: Response) => {
//   const secretKey: string | undefined = process.env.JWT_SECRET_KEY;
//   if (!secretKey) return res.status(500).send("Server Error");
//   const { email, username, password } = req.body;
//   if (!email || !username || !password)
//     return res.status(404).json("Details not Found !");
//   // Checking the length of user inputs
//   else if (email.length < 5 || username.length < 2) {
//     return res.status(401).json("Username and Email must be more char");
//   }
//   // Validate email format
//   if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/.test(email)) {
//     return res.status(400).json({
//       message: "Please enter a valid email address",
//     });
//   }
//   try {
//     const existingUser = await Signup.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ error: "User already exists!" });
//     }
//     // Checking password special character
//     if (
//       !/[A-Z]/.test(password) ||
//       !/[a-z]/.test(password) ||
//       !/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password) ||
//       !/\d/.test(password)
//     ) {
//       return res.status(403).json({
//         auth: false,
//         message:
//           "Password should contain at least one uppercase letter, one lowercase letter, one special character, and one number.",
//       });
//     }
//     // created hashed password for security
//     const hashedpassword: string = hashPassword(password);
//     // adding these data to mongodb
//     const SignupId = await Signup.create({
//       email: email,
//       username: username,
//       password: hashedpassword,
//     });
//     // create token
//     const token = jwt.sign({id: SignupId._id},secretKey, {expiresIn: '7d'})
//     return res.status(200).json({
//         id: SignupId._id,
//         email: SignupId.email,
//         username: SignupId.username,
//         token : token,
//         status: 200,
//         message: "User has been registered successfully"
//         });
//   } catch (error) {
//     console.log("Oops! Some error Occurs.", error);
//   }
// });
// export default router;
