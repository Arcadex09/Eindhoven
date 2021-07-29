const discord = require("discord.js");

module.exports.run = async(client, message, args) =>{

    if (!args[1]) return message.channel.send("Geef een update op.");

    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("Je hebt hiervoor geen rechten.");
  
    var update = message.guild.channels.cache.find(ch => ch.id === "867563931941601301");

    message.channel.send("Update succesvol verzonden."); 
    
    var embed = new discord.MessageEmbed()
        .setTitle("Update")
        .setDescription(`${args.slice(1).join(' ')}`)
        .setColor("#fcad03")
        .setFooter(`Update door ${message.author.username}`)
        .setTimestamp();
        
    return update.send(embed);
}

module.exports.help = {
    name: "update"
}