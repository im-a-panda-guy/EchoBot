const NSFW = require("discord-nsfw");
const nsfw = new NSFW();
const {MessageEmbed} = require('discord.js')

module.exports.help = {
	name: "4k",
	aliases: ["fourk"],
	category: "NSFW",
	description: "yes",
	expectedArgs: null,
	minArgs: 0,
	maxArgs: 0,
	ownerOnly: false,
	userPerms: [],
	clientPerms: [],
	nsfw: true,
	cooldown: 3
}

module.exports.run = async (client, message, args) => {
    const image = await nsfw.fourk();
    const embed = new MessageEmbed()
        .setTitle(`fourk`)
        .setColor("RANDOM")
        .setImage(image);
    message.channel.send(embed);    
}