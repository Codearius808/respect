const Discord = require("discord.js");
module.exports = {
calistir: async(client, message, args) => {

const embed = new Discord.MessageEmbed()
.setTitle ("<a:zil:1041667966732873788> VRP | OTO SANATKARLAR ODASI <a:zil:1041667966732873788>")
.setDescription ("**<a:onay:1041324824422780981> MEKANİK KURALLARI <a:onay:1041324824422780981> -)\n 1-)Mekanik bölgesi güvenli bölgedir illegal rol yapılamaz.\n2-)  Mekanikçilerden baron ve baronun belirlediği adamlar haraç alabilir.\n3-) Dükkanınıza sadece 2 adet çalışan alabilirsiniz. Aktif mekaniklerin çalışan sayısı artar.\n4-)  1 hafta boyunca en az aktiflik veren mekanikler kapatılır (Mühürlenir).\n5-)  Mekanikler gelen yol yardımlarına gitmesi zorunludur.\n6-) Mekaniğinize verilen çekici ve dükkan açma belgesini amacı dısında kullanılırsanız mekaniğiniz kapatılır jail islemi uygulanır, mekaniği sadece kendi çıkarınız için kullanamazsınız.\n7-)   Legal  Birlikler 'de olan kişiler mekanik açamaz \n8-) Mekanikçiler illegal rol Yapmadığı sürece İEM-JGK personelleri baskın atamaz.(Aranması olanlar Harici) \n9-) Mekaniklerin ve müşterilerin IC-OOC  dolandırıcılık yapması yasaktır.\n10-)  Mekaniklerin verilen çekici,dükkanlarını satması yasaktır IC yollar ile ISO'ya (İstanbul Sanayi Odası) bildirmesi gerekir.\n11-)  Mekaniklerin Gerçeklik Dışı (Non Rp) Modifiye Yapması Kesinilkle Yasaktır.**")
.setColor("RED")
//
message.reply({embeds:[embed]})





},

name: "bilgi",
description: "Belirlediğiniz kişinin rolünü alırsınız.",
aliases: [],
kategori: "moderasyon",
usage: "",
}