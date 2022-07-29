const express = require('express');
const ctrl = require('../user/controller');

exports.router = (function (){
    const router = express.router();
    router.routes('/user/signin').post(ctrl.signin);
})