const Discord = require("discord.js");
const db = require("nrc.db")
const {MessageActionRow, MessageButton} = require("discord.js")
const {jailRol, üstYetki, kayıtlıRol} = require("../config.json");
module.exports = {
calistir: async(client, message, args) => {
   if (message.member.roles.cache.has(üstYetki) || message.member.permissions.has("ADMINISTRATOR")){
    let kişi = message.mentions.users.first() || client.users.cache.get(args[0])
    if(!kişi) return message.reply("Bir kişiyi etiketlemelisin.")
        db.delete(`jail_${kişi.id}`)
        db.delete(`jailReason_${kişi.id}`)
        db.delete(`jailYetkili_${kişi.id}`)
         message.guild.members.cache.get(kişi.id).roles.remove(jailRol)
         message.guild.members.cache.get(kişi.id).roles.add(kayıtlıRol)
        message.channel.send(`${kişi}, başarılı şekilde jailden çıkartıldı.`)
    }else  return message.reply(`:x: Bunu yapabilmek için yetkin yok!`)        
},

name: "unjail",
description: "",
aliases: [],
kategori: "",
usage: "",
}