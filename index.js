const discord = require("discord.js");
const botConfig = require("./botconfig.json");
const fs = require("fs");
const { sep } = require("path");
const warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));
const ms = require('ms');
const { EventEmitter } = require("stream");
EventEmitter.setMaxListeners
const noblox = require("noblox.js");

const client = new discord.Client();
client.commands = new discord.Collection();
client.aliases = new discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if (err) console.log(err);

    var jsfiles = files.filter(f => f.split(".").pop() === "js");

    if (jsfiles.length <= 0) {
        console.log("Ik kon geen files vinden.");
        return;
    }

    jsfiles.forEach((f, i) => {

        var fileGet = require(`./commands/${f}`);
        console.log(`De file ${f} is geladen.`);

        client.commands.set(fileGet.help.name, fileGet);

    })

});

client.login(botConfig.token);

client.on("ready", async () => {

    console.log(`${client.user.username} is online.`);

    client.user.setActivity(`Eindhoven V1`, { type: "PLAYING" });

});


client.on("guildMemberAdd", member => {

    var role = member.guild.roles.cache.get("867555305965355008");

    if (!role) return;

    member.roles.add(role);


})

client.on("message", async message => {

    if (message.channel.type === "dm") return;

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    const args = message.content.slice(prefix.length).split(/ +/);

    if (message.author.bot) return;

    var commands = client.commands.get(command.slice(prefix.length));

    if (commands) commands.run(client, message, args);

    // if (command === `${prefix}ban`) {

    //  const args = message.content.slice(prefix.length).split(/ +/);

    // if (!args[1]) return message.reply("Geen gebruiker opgegeven.");

    //  if (!args[2]) return message.reply("Gelieve een redenen op te geven.");

    //  if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("sorry jij kan dit niet");

    // if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.reply("Geen perms");

    // var banUser = message.guild.member(message.mentions.users.first());

    //  var reason = args.slice(2).join(" ");

    //  var banCH = message.guild.channels.cache.find(ch => ch.id === "868263047217709117");

    //  if (!banUser) return message.reply("Kan de gebruiker niet vinden.");

    //  var banEmbed = new discord.MessageEmbed()
    //        .setColor("#ff0000")
    //       .setThumbnail(banUser.user.displayAvatarURL)
    //      .setFooter(message.member.displayName, message.author.displayAvatarURL)
    //      .setTimestamp()
    //      .setDescription(`Hallo, er is een nieuwe discord-verbanning. \n\n **Verbannen:** ${banUser} \n **Verbannen door:** ${message.author} \n **Reden Verbanning:** ${reason}`);

    // return banCH.send(banEmbed);

    //  }
   
    
});