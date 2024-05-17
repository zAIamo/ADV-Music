const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');
const { ButtonStyle } = require('discord.js');
const db = require("../mongodb");
module.exports = {
  name: 'help',
  aliases: ['hlp', 'h'],
  description: 'Shows a list of available commands',
  execute(message, args) {
    const botUser = message.client.user;
    const botPing = Date.now() - message.createdTimestamp;
    const serverCount = message.client.guilds.cache.size;
    const embed = new EmbedBuilder()
      .setColor('#2b71ec')
      .setAuthor({
        name: 'Im here to Help!',
        iconURL: 'https://cdn.discordapp.com/attachments/1175487983915376662/1175667506791325706/communication.png?ex=656c10b0&is=65599bb0&hm=e378f1b355a2401bcab504b08a0766001d6b7c090c91ce0a7a7a87c868feb955&', 
        url: 'https://discord.gg/FUEHs7RCqz'
    })
     
      .setDescription(`__**Estadística:**__\n\n> **📊 Servidores:** ${serverCount}\n> **🟢 Bot Ping:** ${botPing}ms\n> **👑 Hecho por Alamo**\n\n__**Comandos:**__ `)
      .addFields(
      
        {
          name: '▶️  Basico',
          value: '`avatar`, `owner`, `support`, `invite`, `userinfo`',
          inline: true,
        },
       
        {
          name: '▶️  Musica',
          value: '`play`, `stop`, `seek`,`volume`,`pause`,`resume`,`skip`,`remove`,`shuffle`,`queue`',
          inline: true,
        },
      
        {
          name: '▶️  Divertido',
          value: ' `ascii`, `joke`, `roll`',
          inline: true,
        },
      
        {
          name: '▶️  Imaganes',
          value: '`cat`, `dog`',
          inline: true,
        },
      
        {
          name: '▶️  Anime',
          value: '`<prefix>animecommands for more info`',
          inline: true,
        },
     
        {
          name: '▶️  Utilidad',
          value: '`kick`, `ban`, `serverinfo`,`userinfo`, `clear`',
          inline: true,
        }
      )
      .setThumbnail(botUser.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
      .setImage(`https://cdn.discordapp.com/attachments/1113800537402527903/1236803979996958740/11.png?ex=6641e8b7&is=66409737&hm=96f69ba8bcde4ca44bf8713e22001e0bafad0335cfd1f57c439a34b4762f0e03&`);
};
