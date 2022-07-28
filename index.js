const fs = require('fs');
const bcrypt = require('bcrypt');

const psw = "ergeqrgqrg";
const username = 'tamer';

bcrypt.hash(psw, 5, function(error, bcryptedPassword) {
  const newUser = {"username": username, "password" : bcryptedPassword }
  
  fs.writeFile('chris',(newUser), function(error){
    if (error) throw error;
    console.log('fichier utilisateur crée !'); 
  })
})



