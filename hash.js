const bcrypt = require('bcryptjs');
const {MD5} = require('crypto-js');
const jwt = require('jsonwebtoken');


const id = '1000';
const secret = 'supersecret';

const receivedToken = 'eyJhbGciOiJIUzI1NiJ9.MTAwMA.L9PmEqLlZjettygguzj25agunJu6NkvVtG9RFRBnK2Y'


const token = jwt.sign(id,secret);
 const decodeToken = jwt.verify(receivedToken, secret)


console.log("jwt token ",token)
console.log("decodeToken ", decodeToken)
// const secret = 'mysecretpassword';
// const secretSalt = 'myfdadfafafadfadfa';


// const user = {
//     id:1,
//     token: MD5('fdairfi3ra').toString() + secretSalt
// }

// const receivedToken = '3raaaa3rfaieifaia';
// if(receivedToken===user.token)  {
//     console.log('can login')
// }

// console.log(user)

// bcrypt.genSalt(10,(err,salt)=> {
//     if(err) return next(err)
//     bcrypt.hash('password123',salt,(err, hash) =>{
//         if(err) return next(err)
//         console.log(hash)
//     })
// })