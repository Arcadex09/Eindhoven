const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("sorry jij kan dit niet");

    if (!args[0]) return message.reply("Geen gebruiker opgegeven.");

    if (!args[1]) return message.reply("Gelieve een redenen op te geven.");

    if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("Geen perms");

    var staffWarnUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    var reason = args.slice(1).join(" ");

    if (!staffWarnUser) return message.reply("Kan de gebruiker niet vinden.");

    if (staffWarnUser.hasPermission("ADMINISTRATOR")) return message.reply("Sorry je kunt deze gebruiker niet warnen");

    if (!warns[staffWarnUser.id]) warns[staffWarnUser.id] = {
        warns: 0
    };

    warns[staffWarnUser.id].warns++;

    fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
        if (err) console.log(err);
    });

    var embed = new discord.MessageEmbed()
        .setColor("#ff0000")
        .setFooter(message.member.displayName, message.author.displayAvatarURL)
        .setTimestamp()
        .setDescription(`**Gewarnd:** ${staffWarnUser} (${staffWarnUser.id})
    **Warning door:** ${message.author}
    **Redenen: ** ${reason}`)
        .addField("Aantal warns", warns[staffWarnUser.id].warns);

    var warnChannel = message.member.guild.channels.cache.get("868111795901059092");

    if (!warnChannel) return;

    warnChannel.send(embed);


}

module.exports.help = {
    name: "staffwarn"
}