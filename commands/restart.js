const discord = require("discord.js");

module.exports.run = async(client, message, args) =>{

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Je hebt hiervoor geen rechten.");

    var embed = new discord.MessageEmbed()
        .setTitle("Bot aan het herstarten")
        .setDescription("De bot developer heeft de bot opnieuw opgestart. \n Het kan even duren voordat de commando's weer beschikbaar zijn. \n Excuus voor het ongemak.")
        .setColor("#ff4d00")
        .setTimestamp();
      
    await message.channel.send(embed);

    process.exit();

}

module.exports.help = {
    name: "restart"
}