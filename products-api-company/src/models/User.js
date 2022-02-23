import e from "express";
import {Schema, model} from "mongoose";
import bcrypt, { genSalt } from 'bcryptjs'

const userSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    email: {
        type: String, 
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    roles: [
        {
        ref: "Role", 
        type: Schema.Types.ObjectId
        },
    ],
},
{
    timestamps: true, 
    versionKey: false,
    }
);

userSchema.statics.encryptPassword = async (password) => {
    const await = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
}

userSchema.statics.comparePassword = async (password, receivePassword) => {
    return await bcrypt.compare(password, receivedPassword)
}



export default model('/User',userSchema); 
