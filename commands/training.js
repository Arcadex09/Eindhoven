const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if (!args[1]) return message.channel.send("Geef een dienst op waarvoor je de training wilt inplannen. (Politie, brandweer, ambulance, rijkswaterstaat, verkeerspolitie, kmar, dsi");
    if (!args[2]) return message.channel.send("Geef een type op.");
    if (!args[3]) return message.channel.send("Zet hier eventueel je co-host neer, zet anders --");
    if (!args[4]) return message.channel.send("Geef een tijd op");
    if (!args[5]) return message.channel.send("Zet opmerkingen voor je trainingen neer.");

    var trainingCH = message.guild.channels.cache.find(ch => ch.id === "867563980271386645");

    var succesvolEmbed = new discord.MessageEmbed()
        .setColor("GREEN")
        .setDescription("✅ Training is succesvol ingeplant en verstuurd naar het desbetreffende kanaal!");

    message.channel.send(succesvolEmbed);

    var trainingEmbed = new discord.MessageEmbed()
        .setTitle(`${args[1]} Training`)
        .addFields(
            { name: "Dienst", value: `${args[1]}` },
            { name: "Host", value: `${message.author}` },
            { name: "Co-Host", value: `${args[3]}` },
            { name: "Type-Training", value: `${args[2]}` },
            { name: "Tijd", value: `${args[4]}` },
            { name: "Opmerkingen", value: `${args.slice(5).join(' ')}` }
        )
        .setFooter(`${args[4]}`)
        .setColor("#00ff99")
        .setTimestamp();

    return trainingCH.send(trainingEmbed);

}

module.exports.help = {
    name: "training"
}