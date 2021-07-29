const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if (!args[1]) return message.reply("Geen gebruiker opgegeven.");

    if (!args[2]) return message.reply("Gelieve een redenen op te geven.");

    if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("sorry jij kan dit niet");

    if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.reply("Geen perms");

    var banUser = message.guild.member(message.mentions.users.first());

    var reason = args.slice(2).join(" ");

    var banCH = message.guild.channels.cache.find(ch => ch.id === "868263047217709117");

    if (!banUser) return message.reply("Kan de gebruiker niet vinden.");

    banUser.ban({ reason: reden });

    var banEmbed = new discord.MessageEmbed()
        .setColor("#ff0000")
        .setThumbnail(banUser.user.displayAvatarURL)
        .setFooter(message.member.displayName, message.author.displayAvatarURL)
        .setTimestamp()
        .setDescription(`Hallo, er is een nieuwe discord-verbanning. \n\n **Verbannen:** ${banUser} \n **Verbannen door:** ${message.author} \n **Reden Verbanning:** ${reason}`);

    return banCH.send(banEmbed);


}

module.exports.help = {
    name: "ban"
}