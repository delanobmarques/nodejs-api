import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export const comparePasswords = (password, hash) => {
  return bcrypt.compare(password, hash)
}

export const hashPassword = (password) => {
  return bcrypt.hash(password, 5)
}

export const createJWT = (user) => {
  const token = jwt.sign({
      id: user.id,
      username: user.username
    }, 
    process.env.JWT_SECRET
  )
  return token
}

export const protect = (req, res, next) => {
    //bearer token:generic way of describing someone having the ability to send up a token which can be any type of token (jwt, apikey, acces token,...)
    const bearer = req.headers.authorization

    if (!bearer) {
        res.status(401)
        res.json({message: 'not authorized'})
        return
    }

    const [, token] = bearer.split(' ') //bearer kjbcdksbcjhbc(token)

    if (!token) {
        res.status(401)
        res.json({message: 'not valid token'})
        return
    }

    try {
        const user = jwt.verify(token, process.env.JWT_SECRET)
        req.user = user
        next()
    } catch (e) {
        console.error(e)
        res.status(401)
        res.json({message: 'not valid token'})
        return
    }
}