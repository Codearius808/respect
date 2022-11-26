const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
const moment = require("moment")
require("moment-duration-format")
module.exports = {
calistir: async(client, message, args) => {
	if(args[0]){
		target = message.mentions.users.first() || await client.users.fetch(args[0]).catch((err) => {message.reply({content: `Girilen ID'de kullanıcı bulunamadı.`})})
	}else{
		target = message.mentions.users.first() || message.author
	}
	if(!target) return message.reply({embeds: [new MessageEmbed().setColor("RED").setDescription("Kullanıcı bulunamadı.")]});
	let bot = "Hayır"
	if(target.bot) bot = "Evet"
	const kbEmbed = new MessageEmbed()
	.setColor("BLACK")
	.setAuthor({name: `${target.tag}`, iconURL: target.avatarURL({dynamic: true})})
	.setDescription("• Tüm veriler anlık olarak gösterilir, aşağıdaki butonlara basarak profil görsellerine ulaşabilirsin.")
	.addField(`<:icons_people:1041137256980811837> • Kullanıcı adı`, "```"+target.username+"```", true)
	.addField(`<:icons_store:1041137321933815921> • Kullanıcı etiketi`, "```"+target.discriminator+"```", true)
	.addField(`<:icons_info:1041137366619918437> • Kullanıcı kimliği`, "```"+target.id+"```")
	.addField(`<:icons_bots:1041137393769652324> • Bot mu?`, "```"+bot+"```")
	.addField(`<:icons_pin:1041137172037779486> • Hesap oluşturma tarihi`, "```"+moment(target.createdAt).format("DD.MM.YYYY")+"```")
	.setFooter({text: `${message.author.tag} tarafından istendi.`})
	const row = new MessageActionRow()
		.addComponents(
		new MessageButton()
		.setCustomId(`GurluAvatar_${target.id}`)
		.setLabel('Avatar')
		.setEmoji("1041361344840089711")
		.setStyle('SECONDARY'),	
		)
		.addComponents(
		new MessageButton()
		.setCustomId(`GurluBanner_${target.id}`)
		.setLabel('Banner')
		.setEmoji("1041362222573695046")
		.setStyle('SECONDARY'),	
		);
	if(message.guild.members.cache.get(target.id)) kbEmbed.addField(`<:icons_roles:1041138308035645470> • Sahip olduğu roller`, "```"+message.guild.members.cache.get(target.id).roles.cache.map(r => r.name)+"```")
	message.channel.send({embeds: [kbEmbed], components: [row]})
},

name: "kullanıcı",
description: "",
aliases: ["kb"],
kategori: "",
usage: "",
}