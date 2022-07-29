const express = require('express');
const dotenv = require('dotenv');
const newLocal = './router/router';
const router = express.Router();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended : true}));  

$.getScript(constroller.js, function(){
  alert('La script a bien été chargé.');
});

dotenv.config('./.env');
const {PORT} = process.env || 2003

app.use(router)


app.listen(PORT, () => {console.log(`Lancé sur le port : ${PORT}`)} )






// function generateAccessToken(email) {
//   return jwt.sign(email, process.env.ACCESS_TOKEN_SECRET);
// }

// function generateRefreshToken(email) {
//   return jwt.sign(email, process.env.REFRESH_TOKEN_SECRET);
// }


// const accessToken = generateAccessToken(email);
// const refreshToken = generateRefreshToken(email);

// bcrypt.hash(psw, 5, function(error, bcryptedPassword) {
//   const newUser = {"username": email, "password" : bcryptedPassword }

// fs.appendFile('Fichier.json','email : '+ email + "\npassword : " + bcryptedPassword + "\ntoken : " + accessToken + "\nrefreshtoken : " + refreshToken + '\n\n', function (err) {
//   if (err) throw err;
// console.log('Fichier mis à jour !');
// });
// });





