const discord = require("discord.js");

module.exports.run = async(client, message, args) =>{

   var embed = new discord.MessageEmbed()
       .setTitle("Speler Info")
       .setDescription("Zie hier de spelerinfo van jezelf.")
       .addFields(
           { name: "Account ID", value: `${message.author.id}` },
           { name: "Account binnengetreden", value: `${message.member.guild.joinedAt}`}
       )
       .setFooter(`User ID: ${message.author.id} (Nog in Beta)`);

    return message.channel.send(embed);

}

module.exports.help = {
    name: "userinfo"
}