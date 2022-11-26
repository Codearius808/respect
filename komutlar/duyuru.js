const Discord = require("discord.js");
const kullanıcılar = [
    "957282617256984596",
    "852712824878006302",
    "551735102913249301",
    "495639515088683019",
    "530369853878566912",
    "540155751696433163",
    "",
]

module.exports = {
    calistir: async(client, message, args) => {
        if (kullanıcılar.includes(message.author.id)){
         let mesaj = args.slice(0).join(' ');
       if(!mesaj) return message.reply("Mesaj girmelisin.")
        const Embed = new Discord.MessageEmbed()
        .setTitle("Oto Sanatkarlar Esnaf Odası | Duyuru Sistemi")
        .setDescription(mesaj)
        .setColor("BLUE")
        .setThumbnail("https://cdn.discordapp.com/icons/1014948044984295496/e0d787c79d387726bead5795dddb6ec3.png")
        message.channel.send({embeds: [Embed]})
        message.channel.send("||@everyone||")
        message.delete(message.author)
}
},
name: "duyuru",
description: "",
aliases: [''],
kategori: "",
usage: "",
}