const discord = require("discord.js");
const ms = require('ms');

module.exports.run = async(client, message, args) =>{

    if (!message.member.hasPermission("MUTE_MEMBERS")) return message.reply("sorry jij kan dit niet");

    if (!args[1]) return message.reply("Maak gebruik van het volgende formaat: ,mute <gebruiker> <tijd (h,m,s)> <Reden (E)>");

    if (!message.guild.me.hasPermission("MUTE_MEMBERS")) return message.reply("Geen perms");

    var mutePerson = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[1]));

    if (!mutePerson) return message.reply("Kan de gebruiker niet vinden.");

    if (!args[2]) return message.channel.send("Geef een tijd op");

    if (!args[3]) return message.channel.send("Geen reden opgegeven.");

    var muteCH = message.guild.channels.cache.find(ch => ch.id === "868282490517860352");

    if (mutePerson.hasPermission("MANAGE_MESSAGES")) return message.reply("Ik kan moderators niet dempen.");

    var muteRole = message.guild.roles.cache.get('868268098283798598');
    if (!muteRole) return message.channel.send("De rol muted bestaat niet.");

    var muteTime = args[2];


    if (!muteTime) return message.channel.send("Geen tijd opgegeven");

    await (mutePerson.roles.add(muteRole.id));
    message.channel.send(`De gebruiker ${mutePerson} is succesvol gemuted voor ${muteTime} Reden: ${args.slice(3).join(' ')}`);

    setTimeout(() => {

        mutePerson.roles.remove(muteRole.id);

        message.channel.send(`De mute van ${mutePerson} is succesvol opgeheven.`);

    }, ms(muteTime));

    var muteEmbed = new discord.MessageEmbed()
        .setTitle("Nieuwe Mute")
        .setDescription(` Hallo, er is een nieuw mute ${message.guild.name} \n\n **Gemute:** ${mutePerson} \n **Moderator:** ${message.author} \n **Lengte:** ${muteTime} \n **Reden van Mute:** ${args.slice(3).join(' ')}`)
        .setColor("#03bafc")
        .setTimestamp();

    muteCH.send(muteEmbed);

}

module.exports.help = {
    name: "mute"
}