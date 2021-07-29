const discord = require("discord.js");

module.exports.run = async(client, message, args) =>{

    var halloEmbed = new discord.MessageEmbed()
        .setDescription(`Hallo ${message.author.username}!`)
        .setColor("#000087");

    return message.channel.send(halloEmbed);

}

module.exports.help = {
    name: "hallo"
}