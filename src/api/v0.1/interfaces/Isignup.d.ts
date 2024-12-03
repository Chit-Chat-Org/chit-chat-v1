import { Document } from "mongoose";

interface Isignup extends Document{
    _id:string;
    email: string;
    username:string;
    password: string;
    fullname:string;
}

export default Isignup;