const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var solstatus = new discord.MessageEmbed()
        .setTitle("Sollicitatiestatus")
        .addFields(
            { name: "🚔 Politie", value: "Gesloten" },
            { name: "🚒 Brandweer", value: "Gesloten" },
            { name: "🚑 Ambulance", value: "Gesloten" },
            { name: "🚧 Rijkswaterstaat", value: "Gesloten" },
            { name: "🚦 Verkeerspolitie", value: "Gesloten" },
            { name: "🚨 Koninklijke Marechaussee", value: "Gesloten" },
            { name: "🔫 Dienst Speciale Interventies", value: "Gesloten" },
            { name: "🛠 Developer", value: "Gesloten" }
        )
        .setColor("#6e6d6d")
        .setTimestamp();

    message.channel.send(solstatus);

}

module.exports.help = {
    name: "sollistatus"
}