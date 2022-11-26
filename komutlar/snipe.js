const Discord = require("discord.js");
const db = require("nrc.db")
const {MessageActionRow, MessageButton} = require("discord.js")
module.exports = {
calistir: async(client, message, args) => {
    if (!message.member.permissions.has("ADMINISTRATOR")) return;
    const mesaj = await db.fetch(`snipe.mesaj.${message.channel.id}`)
    const kullanıcı = await db.fetch(`snipe.id.${message.channel.id}`)
    let member = client.users.cache.get(kullanıcı)
    const embed = new Discord.MessageEmbed()
    .setColor("GREEN")
	.setAuthor({name: "Silinen son mesaj "+member+"("+member.id+")", iconURL: member.avatarURL()})
    .setDescription(mesaj)
    message.channel.send({embeds: [embed]})		
},

name: "snipe",
description: "",
aliases: [],
kategori: "",
usage: "",
}