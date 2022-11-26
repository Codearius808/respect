const Discord = require("discord.js");
const db = require("nrc.db")
const {MessageActionRow, MessageButton} = require("discord.js")
const {sahip} = require("../config.json");
const kullanıcılar = [
    "540155751696433163",
    "989170250497011782",
    "588388704150880308",
]
module.exports = {
calistir: async(client, message, args) => {
    if (kullanıcılar.includes(message.author.id)){
    let kisi = message.mentions.users.first() || client.users.cache.get(args[0])
    if(!kisi) return message.reply("Bir üyeyi etiketlemelisin.")
    if (db.has(`${message.guild.id}_${kisi.id}_banYetki`)){
        db.delete(`${message.guild.id}_${kisi.id}_banYetki`)
        message.reply({embeds:[new Discord.MessageEmbed().setColor("WHITE").setDescription(`**${kisi.tag}** üyesinin ban izni alındı.`).setTimestamp()]})
    }else{
        db.set(`${message.guild.id}_${kisi.id}_banYetki`, 1)
        message.reply({embeds:[new Discord.MessageEmbed().setColor("WHITE").setDescription(`**${kisi.tag}** üyesine ban izni verildi.`).setTimestamp()]})
    }
    }    
},

name: "banyetkisi",
description: "",
aliases: ['banyt', 'guardizin', 'banizin'],
kategori: "",
usage: "",
}