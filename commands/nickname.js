const discord = require("discord.js");

module.exports.run = async(client,message, args) =>{

    if (!message.member.hasPermission("CHANGE_NICKNAME")) return message.channel.send("Je hebt hiervoor geen rechten.");

    if (!args[1]) return message.channel.send(`Geef een naam op.`);
     
    message.channel.send(`Je bijnaam op de server is succesvol gewijzigt naar ${args[1]}.`);

    message.member.setNickname(args[1]);

}

module.exports.help = {
    name: "nickname"
}