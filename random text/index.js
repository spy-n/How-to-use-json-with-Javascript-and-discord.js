const Discord = require('discord.js');//require de module of discord.js
const client = new Discord.Client();//new client
const json = require('./jsons/text.json')//require de json
const rfn = require('./functions/random fc');

client.on('message', message =>{
if(message.content === "random text pls") {
    message.channel.send(rfn.rand(json.texts))
}
});
//in console
console.log(rfn.rand(json.texts))

client.login('token');//here you put your token of you bot
