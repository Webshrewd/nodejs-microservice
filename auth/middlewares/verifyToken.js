const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")

dotenv.config();

const verifyToken = (req, res, next)=>{
    const authHeader = req.headers.token
    // split the header, and get the token "Bearer token"
    const token = authHeader.split(" ")[1];
    if (authHeader) {
        jwt.verify(token, process.env.JWT_SEC, (err, user)=>{
            if (err) res.status(403).json("Your session token has expired!");
            req.user = user
            next();
        })
    } else {
        return res.status(401).json("You are not authenticated")
    }
}

const verifyTokenAndAuthorization = (req, res, next) =>{
    verifyToken(req, res, ()=>{
        if(req.user.id === req.params.id){
        next();
        }else{
            res.status(403).json("Permission denied!");
        }
    })
}


module.exports = {verifyTokenAndAuthorization}