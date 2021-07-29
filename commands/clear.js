const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Je bent niet gemachtigt dit commando te beheren");

    if (!args[1]) return message.reply("Geef een aantal op");

    if (Number.isInteger(parseInt(args[1]))) {

        var amount = parseInt(args[1]) + 1;

        message.channel.bulkDelete(amount).then(() => {

            if (args[1] <= 0) {
                message.reply("Ben je loemp? Ik kan toch geen 0 berichten verwijderen!").then(msg => msg.delete({ timeout: 3000 }));
            } else if (args[1] == 1) {
                message.reply("Ik heb **1** bericht verwijderd").then(msg => msg.delete({ timeout: 3000 }));
            } else {
                message.reply(`Ik heb **${args[1]}** berichten verwijderd`).then(msg => msg.delete({ timeout: 3000 }));
            }

        })

    } else {
        return message.reply("Geef een getal op.");
    }

}

module.exports.help = {
    name: "clear"
}