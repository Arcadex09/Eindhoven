const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if (!args[1]) return message.channel.send("Geef een sanctie op, bijvoorbeeld warn,kick,ban.");

    if (!args[2]) return message.channel.send("Op welk platform wil je de sanctie aanvragen? (Roblox, discord)");

    if (!args[3]) return message.channel.send("Wat is de naam van de speler? (Discord = naam + tag | Roblox = roblox naam.)");

    if (!args[4]) return message.channel.send("Wat is de rede van de sanctie? Graag bewijs ervan meevoegen.");

    var goedkeuringChannel = message.guild.channels.cache.find(gc => gc.id === "868111207578632212");

    var succesEmbed = new discord.MessageEmbed()
        .setColor("GREEN")
        .setDescription("✅ Aanvraag is succesvol verzonden en verstuurd naar het desbetreffende kanaal voor goedkeuring!");

    message.channel.send(succesEmbed);


    var prompt = new discord.MessageEmbed()
        .setTitle(`${args[1]} Aanvraag | ID: ${message.id}`)
        .setDescription(`Er is een ${args[1]} aanvraag gedaan.`)
        .addFields(
            { name: "Soort Sanctie", value: `${args[1]}` },
            { name: "Moderator", value: `${message.author}` },
            { name: "Platform", value: `${args[2]}` },
            { name: "Speler naam", value: `${args[3]}` },
            { name: "Rede sanctie:", value: `${args.slice(4).join(' ')}` }
        )
        .setColor("#6e6d6d")
        .setTimestamp();

    return goedkeuringChannel.send(prompt);

}

module.exports.help = {
    name: "request"
}