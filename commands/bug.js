const discord = require("discord.js");

module.exports.run = async(client, message, args) =>{

    if (!args[1]) return message.channel.send("Geef een bug op.");

    const channel = message.guild.channels.cache.find(ch => ch.id === "868099567239979008");

    var succesvolEmbed = new discord.MessageEmbed()
        .setColor("GREEN")
        .setDescription("✅ Bug is succesvol verstuurd naar het desbetreffende kanaal!");

    message.channel.send(succesvolEmbed);

    var embed = new discord.MessageEmbed()
        .setTitle("Bug Melding")
        .setColor("#FF0000")
        .setDescription(`${args.slice(1).join(' ')}`)
        .setFooter(`Bug van ${message.author.username}`)
        .setTimestamp();

    return channel.send(embed);

}

module.exports.help = {
    name: "bug"
}