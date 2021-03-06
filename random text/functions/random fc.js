const fs = require("fs")
const fn = {};
// @ts.check 

function Mathawp(Obj){
    return Obj[Object.keys(Obj)[Math.floor(Math.random() * Object.keys(Obj).length)]]
    }
module.exports = {
fnrandom: require('../jsons/text.json'),
rand: Mathawp,
    }
