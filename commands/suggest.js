const discord = require("discord.js");

module.exports.run = async(client, message, args) =>{

    if (!args[1]) return message.channel.send("Geef een suggestie op.");

    const channel = message.guild.channels.cache.find(ch => ch.id === "868099542426456074");

    var succesvolEmbed = new discord.MessageEmbed()
        .setColor("GREEN")
        .setDescription("✅ Suggestie is succesvol verstuurd naar het desbetreffende kanaal!");

    message.channel.send(succesvolEmbed);

    var embed = new discord.MessageEmbed()
        .setTitle("Suggestie")
        .setColor("#ffd500")
        .setDescription(`${args.slice(1).join(' ')}`)
        .setFooter(`Suggestie van ${message.author.username}`)
        .setTimestamp();

    return channel.send(embed);

}

module.exports.help = {
    name: "suggest"
}