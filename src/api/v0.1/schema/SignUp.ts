import mongoose from 'mongoose'
import Isignup from '../interfaces/Isignup';

const SignUp = new mongoose.Schema({
    _id: { type: String, required: true },
    email:{
        type:String,
        required:true,
        unique: true
    },
    username:{
        type: String,
        require: true,
    },
    fullname:{
        type: String,
    }
})

const Signup = mongoose.model<Isignup>('SignUp',SignUp);

export default Signup;