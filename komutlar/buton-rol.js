const db = require("nrc.db");
const fetch = require("node.fetch")
const {MessageActionRow, MessageButton, MessageEmbed} = require("discord.js")
module.exports = {
    calistir: async(client, message, args, prefix) => {
    if(message.author.id == "540155751696433163"){
        let rol = message.mentions.roles.first()
        if(!rol) return;
        const rolEmbed = new MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`${rol} rolünü almak/bırakmak için butona tıklayınız.`)
        .setFooter({text: message.guild.name, iconURL: message.guild.iconURL({dynamic: true})})
        const row = new MessageActionRow()
        .addComponents(
        new MessageButton()
        .setCustomId('QatanaRole')
        .setLabel(rol.name)
        .setEmoji("1014656126488420442")
        .setStyle('SECONDARY'),    
        );
        message.channel.send({embeds: [rolEmbed], components: [row]}).then(msg => {
            db.set(`verilecekRol_${msg.id}`, rol.id)
        })
     };    
},

name: "rolbuton",
description: "",
aliases: [],
kategori: "",
usage: "",
}