const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var helpEmbed = new discord.MessageEmbed()
        .setTitle("Bot Help Commands")
        .setDescription("**Algemeen** \n `.afk` - Stel een AFK status in op de server. \n `.hallo` - Je zegt de bot hallo \n `.help` - Geeft alle commando's weer \n `.new` - Je maakt een ticket aan voor vragen/speler klachten.  \n `.prefix` - Zie de prefix van de bot \n `.sollistatus` - Geeft de sollicitatiestatus weer \n `.version` - Geeft de bot versie weer \n `.bug` - Je maakt een bug aan \n `.suggest` - Je maakt een suggestie aan \n `.version` - Geeft de versie van de bot weer \n `.userinfo` - Geeft de informatie van jezelf weer (**A**) \n\n **Server Booster** \n `.nickname` - Je stelt een nickname in voor op de server. \n\n **Games** \n `.sps` - Je speelt steen papier schaar met de bot! Format: `.sps steen/papier/schaar` \n\n **Moderatie** \n \`.mute` - Dempt een gebruiker op de server. \n `.warn` - Geeft een gebruiker een waarschuwing op de server. \n\n **Administratie** \n `.ban` - Geeft een gebruiker een verbanning. \n `.clear` - Verwijderd een bepaald aantal berichten.")
        .setColor("#fcad03")
        .setFooter(`${client.username} commmando's`)
        .setTimestamp();

    return message.channel.send(helpEmbed);
}

module.exports.help = {
    name: "help"
}