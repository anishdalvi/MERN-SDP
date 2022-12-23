const jwt = require('jsonwebtoken')

module.exports = ( req, res, next ) => {

    try {
        const accessToken = req.headers.authorization
        if(!accessToken){
            throw Error('No Access Token')
        }

        const decoded = jwt.verify(accessToken, "secret@123")
        
        req.email = decoded.email

        next()

    } catch (error) {
        return res.status(401).json({
            message: "Unauthorized Access",
            error: error.message
        })
    }

}