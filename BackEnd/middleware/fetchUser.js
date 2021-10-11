const jwt = require('jsonwebtoken');
const JWT_SECRET='@st$Fj*%je$8IJNR$57i$%iK$<YT^$$&I$O^%#2#@*%z06538528';

const fetchUser = (req, res, next)=>{
      
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({error: 'please authenticate using a valid token'})
    }
    try {
        const data = jwt.verify(token, JWT_SECRET)  ;
        req.user = data.user;
        next();
      } catch (error) {
        res.status(401).send({error: 'please authenticate using a valid token'})
      }
}

module.exports= fetchUser;