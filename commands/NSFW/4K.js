const nsfw = require("discord-nsfw");
const nsfw = new nsfw();
const {MessageEmbed} = require('discord.js')

module.exports.help = {
	name: "4k",
	aliases: ["fourk"],
	category: "nsfw",
	expectedArgs: null,
	minArgs: 0,
	maxArgs: 0,
	ownerOnly: false,
	userPerms: [],
	clientPerms: [],
	nsfw: true,
	cooldown: 1
}

module.exports.run = async (client, message, args) => {
    const image = await nsfw.fourk();
    const embed = new MessageEmbed()
        .setTitle(`fourk`)
        .setColor("RANDOM")
        .setImage(image);
    message.channel.send(embed);    
}