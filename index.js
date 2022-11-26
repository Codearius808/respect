const Discord = require("discord.js");
const { Intents, Collection } = Discord;
const client = new Discord.Client({ intents: 32767 });
const db = require("quick.db");
// yaw amk quick db mi kaldi bu nasıl bot ya toplama gurlu
const fetch = require("node-fetch")
const db5 = require("node-fetch")
require("discord-reply");

const { token, owners } = require("./config.json");

client.commands = new Collection();
client.aliases = new Collection();
client.stats = new Collection();
require("./handlers/Events.js")(client);
require(`./utils/komutcalistirici`)(client);
	

client.login(token).catch((error) =>
	console.error("Lütfen tokeni doğru biçimde girin!\n\n" + error)
);

Promise.prototype.del = (ms) => {
  if (this)
    this.then((m) => {
      if (m.deletable) setTimeout(() => m.delete(), Number(ms));
    });
};

process.on("uncaughtException", (err) => console.error(err.stack));
process.on("unhandledRejection", (err) => console.error(err.stack));
//kayıt
client.on('interactionCreate', async (interaction) => {
  if (!interaction.isButton()) return;
  if(interaction.customId === "KayıtOL"){
      interaction.member.roles.add("1014963368815235254")
      interaction.reply({embeds: [new Discord.MessageEmbed().setColor("RANDOM").setDescription(`${interaction.user}, **Başarılı şekilde kayıt oldunuz. İyi eğlenceler dileriz...**`)], ephemeral: true })
  }
});
//reklam-engel
client.on("messageCreate", async message=> {
  const reklam = ["discord.gg",];
  if (reklam.some(word => message.content.includes(word))) {
      if(!message.member.permissions.has("ADMINISTRATOR")){
      message.delete().catch((err) => {})
      message.channel.send({content: `${message.author}, **Reklam yapmaya çalıştı.**`}).then(msg => setTimeout(() => msg.delete().catch((err) => {}), 5000))
      }
}
});
//küfür engel
client.on("messageCreate", async msg => {
  const kufur = ["oç", "amk", "ananı sikiyim", "ananıskm", "piç", "amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "mal", "sik", "yarrak", "am", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "ak", "amq",];
  if (kufur.some(word => msg.content.split().includes(word))) {
      if (!msg.member.permissions.has("ADMINISTRATOR")) {
          msg.delete().catch((err) => {})
          msg.channel.send(`${msg.author}, **Sunucuda küfür edemezsin.**`).then(mesaj => setTimeout(() => mesaj.delete().catch((err) => {}), 5000))
      }              
  }
});
client.on("messageUpdate", async (oldMessage, newMessage) => {
  const kufur = ["oç", "amk", "ananı sikiyim", "ananıskm", "piç", "amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "mal", "sik", "yarrak", "am", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "ak", "amq",];
  if (kufur.some(word => newMessage.content.includes(word))) {
      if (!newMessage.member.permissions.has("ADMINISTRATOR")) {
          newMessage.delete().catch((err) => {})
          newMessage.channel.send(`${newMessage.author}, **Sunucuda küfür edemezsin.**`).then(msg => setTimeout(() => msg.delete().catch((err) => {}), 5000))
      }              
  }
});
//login-yazı
const figlet = require('figlet');
const chalk = require('chalk');

client.on("ready", () => {
figlet(client.user.tag, function(err, data) {
  if (err) {
    console.log('hata var kontrol edin (ready)');
    console.dir(err);
    return;
  }  
console.log(chalk.white.bold(data));
});
})
//mta-bot-durum
const Gamedig = require('gamedig');
client.on("ready", () => {
setInterval(function() {
            Gamedig.query({
            type: 'mtasa',
            host: '193.223.107.175',
            }).then((state) => {
                client.user.setPresence({activities: [{ name: `Aktif: "${state.raw.numplayers}" oyuncuyu`, type: `WATCHING` }],status: `dnd`,});    
            }).catch((err) => {client.user.setPresence({activities: [{ name: `Kalite.`, type: `WATCHING` }],status: `dnd`,});})
        }, 10000);  
})
//özel-komut
const { MessageEmbed } = require('discord.js')
const { QuickDB } = require("quick.db");
const db6 = new QuickDB();
const prefix = "."

client.on("messageCreate", async message => {
	if(message.content.startsWith(prefix)){
	if(message.author.bot) return;
	if (!message.member.permissions.has("ADMINISTRATOR")) return;
	var args = message.content.split(/ +/g).slice(0);
	let özelKomutum = message.content.substring(message.content.indexOf(prefix)+1, args[0].length);
	let özelKomutlar = await db6.get("komutlar."+message.guild.id+"."+özelKomutum)
	if(!özelKomutlar) return;	
    
		let  user = message.mentions.users.first() || client.users.cache.get(args[1])

    if(!user) return message.reply({embeds: [{color: "RED", author: {name: `${message.guild.name}`,url: `https://discord.gg/mercedes`, icon_url: message.guild.iconURL({dynamic: true})}, description: ":x: **Rol verilecek üyeyi etiketleyin.**",footer: {text: `${message.author.tag} tarafından kullanıldı.`, icon_url: message.author.avatarURL({dynamic: true})}}]})
		let member = message.guild.members.cache.get(user.id)
		if(!member) return message.reply({embeds: [{color: "RED", author: {name: `${message.guild.name}`,url: `https://discord.gg/mercedes`, icon_url: message.guild.iconURL({dynamic: true})}, description: ":x: **Rol verilecek üyeyi etiketleyin.**",footer: {text: `${message.author.tag} tarafından kullanıldı.`, icon_url: message.author.avatarURL({dynamic: true})}}]})
		if(!message.guild.roles.cache.get(özelKomutlar)) return	message.reply({embeds: [{color: "RED", author: {name: `${message.guild.name}`,url: `https://discord.gg/mercedes`, icon_url: message.guild.iconURL({dynamic: true})}, description: ":x: **Verilecek rolü bulamadım.**",footer: {text: `${message.author.tag} tarafından kullanıldı.`, icon_url: message.author.avatarURL({dynamic: true})}}]})
			if(member.roles.cache.get(özelKomutlar)){
				member.roles.remove(özelKomutlar)
				.then(() => {message.reply({embeds: [{color: "GREEN", author: {name: `${message.guild.name}`,url: `https://discord.gg/mercedes`, icon_url: message.guild.iconURL({dynamic: true})}, description: `:ballot_box_with_check: **${member} üyesinden ${message.guild.roles.cache.get(özelKomutlar)} rolü alındı.**`,footer: {text: `${message.author.tag} tarafından kullanıldı.`, icon_url: message.author.avatarURL({dynamic: true})}}]})})
				.catch((err) => {message.reply({embeds: [{color: "GREEN", author: {name: `${message.guild.name}`,url: `https://discord.gg/mercedes`, icon_url: message.guild.iconURL({dynamic: true})}, description: `:x: **Verilecek rol kişinin veya benim üstümde.**`,footer: {text: `${message.author.tag} tarafından kullanıldı.`, icon_url: message.author.avatarURL({dynamic: true})}}]})})
				member.roles.add(özelKomutlar)
				.then(() => {message.reply({embeds: [{color: "GREEN", author: {name: `${message.guild.name}`,url: `https://discord.gg/mercedes`, icon_url: message.guild.iconURL({dynamic: true})}, description: `:ballot_box_with_check: **${member} üyesine ${message.guild.roles.cache.get(özelKomutlar)} rolü verildi.**`,footer: {text: `${message.author.tag} tarafından kullanıldı.`, icon_url: message.author.avatarURL({dynamic: true})}}]})})
				.catch((err) => {message.reply({embeds: [{color: "GREEN", author: {name: `${message.guild.name}`,url: `https://discord.gg/mercedes`, icon_url: message.guild.iconURL({dynamic: true})}, description: `:x: **Verilecek rol kişinin veya benim üstümde.**`,footer: {text: `${message.author.tag} tarafından kullanıldı.`, icon_url: message.author.avatarURL({dynamic: true})}}]})})
			}
	 }	
});

//level-sistem



//kullanıcı
client.on('interactionCreate', async (interaction) => {
if (interaction.customId.startsWith('GurluAvatar_')) {
		let userId = interaction.customId.split("_");
        if(!userId[1]) return;
		let user = await client.users.fetch(userId[1]).catch((err) => {return interaction.reply({content: `Girilen ID'de kullanıcı bulunamadı.`, ephemeral: true})})
		const avatarEmbed = new Discord.MessageEmbed()
		.setColor("RANDOM")		
		.setImage(user.displayAvatarURL({dynamic: true, size: 2048, format: 'png'}))
		.setDescription(`**${user.tag}**\n\`ID: ${user.id}\``)
		interaction.reply({embeds: [avatarEmbed], ephemeral: true})	
	}
	if (interaction.customId.startsWith('GurluBanner_')) {
		let userId = interaction.customId.split("_");
        if(!userId[1]) return;
		let user = await client.users.fetch(userId[1]).catch((err) => {return interaction.reply({content: `Girilen ID'de kullanıcı bulunamadı.`, ephemeral: true})})
		
		let response = fetch(`https://discord.com/api/v8/users/${user.id}`, {
        method: 'GET',
        headers: {
            Authorization: `Bot ${client.token}`
        }
    })

    let receive = ''
    let banner = 'https://cdn.discordapp.com/attachments/829722741288337428/834016013678673950/banner_invisible.gif'

     await response.then(async a => {
        if (a.status !== 404) {
          await a.json().then(async data => {
                receive = await data['banner']

                if (receive !== null) {

                    let response2 = fetch(`https://cdn.discordapp.com/banners/${user.id}/${receive}.gif`, {
                        method: 'GET',
                        headers: {
                            Authorization: `Bot ${client.token}`
                        }
                    })
                    let statut = ''
                    await response2.then(async b => {
                        statut = await b.status
                         banner = await `https://cdn.discordapp.com/banners/${user.id}/${receive}.gif?size=1024`
                        if (statut === 415) {
                         banner = await `https://cdn.discordapp.com/banners/${user.id}/${receive}.png?size=1024`
                        }

                    })
                }
            })
        }
    })

        if (!receive) return interaction.reply({embeds: [new Discord.MessageEmbed().setColor("ff0000").setDescription("**Bu kullanıcının banneri bulunmuyor.**")], ephemeral: true})
        let embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setImage(banner)
			.setDescription(`**${user.tag}**\n\`ID: ${user.id}\``)
        await interaction.reply({embeds: [embed], ephemeral: true});		
	}	
})
//ban izin
client.on('guildBanAdd', async ban => {
    if(ban.guild.id !== 1014948044984295496) return;
  let entry = await ban.guild.fetchAuditLogs({type: 'MEMBER_BAN_ADD'}).then(audit => audit.entries.first())
  if (!entry || !entry.executor || Date.now()-entry.createdTimestamp > 5000) return;
  let banlayan = client.users.cache.get(entry.executor.id) 
    if(entry.executor.id === client.user.id) return;
  if(!db.has(`${ban.guild.id}_${banlayan.id}_banYetki`)){
      ban.guild.members.ban(banlayan, {reason:`${client.user.tag} tarafından: BAN GUARD`});
      ban.guild.members.unban(ban.user.id)
    let embed = new Discord.MessageEmbed()
    .setColor("RED")
    .setDescription(`**${banlayan.tag} ban izni olmadan ban attığı için yasaklandı. \n${ban.user.tag} kişisinin banı açıldı.**`)
    .setThumbnail(client.user.avatarURL())
    .setTimestamp()
    ban.guild.channels.cache.get(1041007981082447893).send({embeds:[embed]})      
  }
});
//buton rol 
client.on('interactionCreate', async (interaction) => {
    if (!interaction.isButton()) return;
    if(interaction.customId === "QatanaRole"){
        let role = db.fetch(`verilecekRol_${interaction.message.id}`)
        if(interaction.member.roles.cache.get(role)){
            interaction.member.roles.remove(role)
            interaction.reply({embeds: [new Discord.MessageEmbed().setColor("RANDOM").setDescription(`${interaction.guild.roles.cache.get(role)}, rolünü bıraktınız.`)], ephemeral: true })
        }else{
            interaction.member.roles.add(role)
            interaction.reply({embeds: [new Discord.MessageEmbed().setColor("RANDOM").setDescription(`${interaction.guild.roles.cache.get(role)}, rolünü aldınız.`)], ephemeral: true })
        }
    }
});
//mod-log
//////////////  Modlog Başlangıc
client.on("channelCreate", async channel => {
  let kanal = db.fetch(`modlog_${channel.guild.id}`)
  if(!kanal) return;
  let user = await channel.guild.fetchAuditLogs({ type: 'CHANNEL_CREATE' }).then(audit => audit.entries.first())

  const embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle("Kanal Oluşturuldu")
  .setDescription(`
  
  Kanal İd : **${channel.id}**
  Kanal İsmi : **${channel.name}**
  Oluşturan Kişi: ${user.executor} **(${user.executor.id})**
  `)
  client.channels.cache.get(kanal).send({embeds:[embed]})

})

client.on("channelDelete", async channel => {
  let kanal = db.fetch(`modlog_${channel.guild.id}`)
  if(!kanal) return;
  let user = await channel.guild.fetchAuditLogs({ type: 'CHANNEL_DELETE' }).then(audit => audit.entries.first())

  const embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle("Kanal Silindi")
  .setDescription(`
  
  Kanal İd : **${channel.id}**
  Kanal İsmi : **${channel.name}**
  Silen Kişi: ${user.executor} **(${user.executor.id})**
  `)
  client.channels.cache.get(kanal).send({embeds:[embed]})

})

client.on("channelUpdate", async (oldChannel, newChannel) => {
  let kanal = db.fetch(`modlog_${oldChannel.guild.id}`)
  if(!kanal) return;
  let user = await oldChannel.guild.fetchAuditLogs({ type: 'CHANNEL_UPDATE' }).then(audit => audit.entries.first())

  const embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle("Kanal Güncellendi")
  .setDescription(`
  
  Kanal İd : **${oldChannel.id}**
  Eski Kanal İsmi : **${oldChannel.name}**
  Yeni Kanal İsmi : **${newChannel.name}**
  Güncelleyen Kişi: ${user.executor} **(${user.executor.id})**
  `)
  client.channels.cache.get(kanal).send({embeds:[embed]})

})  

client.on("emojiDelete", async emoji => {
  let kanal = db.fetch(`modlog_${emoji.guild.id}`)
  if(!kanal) return;
  let user = await emoji.guild.fetchAuditLogs({ type: 'EMOJİ_DELETE' }).then(audit => audit.entries.first())

  const embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle("Emoji Silindi")
  .setDescription(`
  
  Emoji İd : **${emoji.id}**
  Emoji İsmi : **${emoji.name}**
  Silen Kişi: ${user.executor} **(${user.executor.id})**
  `)
  client.channels.cache.get(kanal).send({embeds:[embed]})

})  

client.on("emojiCreate", async emoji => {
  let kanal = db.fetch(`modlog_${emoji.guild.id}`)
  if(!kanal) return;
  let user = await emoji.guild.fetchAuditLogs({ type: 'EMOJİ_CREATE' }).then(audit => audit.entries.first())

  const embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle("Emoji Oluşturuldu")
  .setDescription(`
  
  Emoji İd : **${emoji.id}**
  Emoji İsmi : **${emoji.name}**
  Oluşturan Kişi: ${user.executor} **(${user.executor.id})**
  `)
  client.channels.cache.get(kanal).send({embeds:[embed]})

})  

client.on("emojiUpdate", async (oldEmoji, newEmoji) => {
  let kanal = db.fetch(`modlog_${oldEmoji.guild.id}`)
  if(!kanal) return;
  let user = await oldEmoji.guild.fetchAuditLogs({ type: 'EMOJİ_UPDATE' }).then(audit => audit.entries.first())

  const embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle("Emoji Güncellendi")
  .setDescription(`
  
  Emoji İd : **${oldEmoji.id}**
  Eski Emoji İsmi : **${oldEmoji.name}**
  Yeni Emoji İsmi : **${newEmoji.name}**
  Güncelleyen Kişi: ${user.executor} **(${user.executor.id})**
  `)
  client.channels.cache.get(kanal).send({embeds:[embed]})

})  

////////////// Modlog Bitiş
//snipe
client.on("messageDelete", async message => {
    await db.set(`snipe.mesaj.${message.channel.id}`, message.content)
    await db.set(`snipe.id.${message.channel.id}`, message.author.id)
});
  // hata vericek yer arıyo şuan glitch sagolsun