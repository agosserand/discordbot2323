require('dotenv').config();
const { Client, IntentsBitField, EmbedBuilder } = require('discord.js');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on('ready', () => {
  console.log(`✅ ${client.user.tag} is online.`);
});

client.on('interactionCreate', (interaction) => {
  if (!interaction.isChatInput()) return;

  if (interaction.commandName === 'embed') {
    const embed = new EmbedBuilder()
      .setTitle('Embed title')
      .setDescription('This is an embed description')
      .setColor('RANDOM')
      .addFields(
        {
          name: 'Field title',
          value: 'Some random value',
          inline: true,
        },
        {
          name: '2nd Field title',
          value: 'Some random value',
          inline: true,
        }
      );

    interaction.reply({ embeds: [embed] });
  }
});

client.on('messageCreate', (message) => {
  if (message.content === 'embed') {
    const embed = new EmbedBuilder()
      .setTitle('Embed title')
      .setDescription('This is an embed description')
      .setColor('RANDOM')
      .addFields(
        {
          name: 'Field title',
          value: 'Some random value',
          inline: true,
        },
        {
          name: '2nd Field title',
          value: 'Some random value',
          inline: true,
        }
      );

    message.channel.send({ embeds: [embed] });
  }
});

client.login(process.env.TOKEN);
