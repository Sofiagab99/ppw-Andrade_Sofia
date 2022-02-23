import User from '../models/User'
import jwt from 'jsonwebtoken'
import config from '../config'

export const signup = async (req, res) => {

    const {username, email, password, roles} = req.body;

    const userFound = User.find({email})

    const newUser = new User({
        username,
        email, 
        password: await User.encryptPassword(password)
    })

   const savedUser =  await newUser.save()
   
   jwt.sign({id: savedUser._id}, config.SECRET, {
       expiraresIn: 86400
   })
   res.status.json({token})


}

export const signin = async (req, res) => {
    res.json('signin')
}
