const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const categoryID = "867707088250601472";

    if (!args[1]) return message.channel.send("Geef een reden op.");

    if (!message.member.hasPermission("MUTE_MEMBERS")) return message.reply("Jij kan dit niet doen");

    var ticketLogs = message.guild.channels.cache.find(ch => ch.id === "868282303242174504");

    if (message.channel.parentID == categoryID) {

        message.channel.delete();

        var closeTicketEmbed = new discord.MessageEmbed()
            .setTitle("Ticket Gesloten")
            .setDescription(`Ticket gesloten door de medewerker: ${message.author} met als reden: ${args.slice(1).join(' ')} `)
            .setColor("GREEN")
            .setTimestamp();

        return ticketLogs.send(closeTicketEmbed);
    } else {

        message.channel.send("Gelieve dit command te doen bij een ticket.");

    }

}

module.exports.help = {
    name: "close"
}