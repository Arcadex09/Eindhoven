const discord = require("discord.js");

module.exports.run = async(client, message, args) =>{

    const categoryID = "867707088250601472";

        if (!args[1]) return message.channel.send("Geef een reden op!");

        var userName = "ticket";
        var userDiscriminator = message.author.id;

        var ticketBestaat = false;

        var ticketUser = message.author;

        message.guild.channels.cache.forEach(channel => {

            if (channel.name == userName.toLowerCase() + "-" + userDiscriminator) {
                ticketBestaat = true;

                message.reply("Je hebt al een ticket aangemaakt");

                return;
            }

        });

        if (ticketBestaat) return;

        message.guild.channels.create(userName.toLowerCase() + "-" + userDiscriminator, { type: 'text' }).then(
            (createdChannel) => {
                createdChannel.setParent(categoryID).then(
                    (settedParent) => {

                        settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === '@everyone'), {
                            SEND_MESSAGES: false,
                            VIEW_CHANNEL: false
                        });

                        settedParent.updateOverwrite(message.author.id, {
                            CREATE_INSTANT_INVITE: false,
                            READ_MESSAGES: true,
                            SEND_MESSAGES: true,
                            ATTACH_FILES: true,
                            CONNECT: true,
                            ADD_REACTIONS: true,
                            VIEW_CHANNEL: true,
                            READ_MESSAGE_HISTORY: true
                        });


                        var ticketEmbed = new discord.MessageEmbed()
                            .setTitle("Hoi " + message.author.username)
                            .setColor("#00ff8c")
                            .setDescription(`**✅ Uw ticket in ${message.guild.name} is succesvol aangemaakt. Klik op ${settedParent} om naar uw ticket te gaan.**`)
                            .setFooter("Ticket version: V1.1.1.3");

                        message.channel.send(ticketEmbed);

                        var embedParent = new discord.MessageEmbed()
                            .setTitle(`Hallo! ${message.author.tag}`)
                            .setDescription(`Welkom in jouw ticket! Iemand van het staff-team komt je zo spoedig mogelijk te woord staan. Tickets kunnen gevoelsmatige en intellectuele innerlijken bevatten. Ga hier dus ook goed mee om. Misbruik maken van dit systeem kan leiden tot zware consequenties. \n\n **Reden aanmaken ticket:** ${args.slice(1).join(' ')}`)
                            .setColor("#ffd500")
                            .setTimestamp();

                        settedParent.send(embedParent);
                        settedParent.send(`<@${message.author.id}>`);

                    }
                ).catch(err => {
                    message.channel.send("Er is iets misgelopen");
                });
            }
        ).catch(err => {
            message.channel.send("Er is iets misgelopen");
        });
    

}

module.exports.help = {
    name: "new"
}