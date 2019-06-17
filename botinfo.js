const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL;
  let botembed = new Discord.RichEmbed()
  .setDescription("Informações do bot")
  .setColor(RED)
  .setThumbnail(bicon)
  .addField("Nome do bot", bot.user.username)
  .addField("Servidor oficial","Coloque o seu server")
  .addField("Dia que o bot foi criado", bot.user.createdAt)
  .addField("Desenvolvido","JavaScript")
  .addField("Meu prefix","rb/")
 
   //caso queira mais coisas na sua ambed  é só .addFiel("tipo o titulo", "e o objetivo")
   //É só rever o comando testa que você entende melhor nem precisa muito conhecimento pra entende :3
   //mais lembrando esse comando não é pra fazer no proprio index
   
    message.channel.send(botembed);
}

module.exports.help = {
  name:"botinfo"
}