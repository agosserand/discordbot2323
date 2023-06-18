const {
    Client,
    Interaction,
    ApplicationCommandOptionType,
    PermissionFlagsBits,
  } = require('discord.js');
  
  module.exports = {
    callback: async (client, interaction) => {
      // Your code here
    },
  
    name: 'kick',
    description: 'Kicks a member from this server.',
    options: [
      // Your options here
    ],
    permissionsRequired: [PermissionFlagsBits.KickMembers],
    botPermissions: [PermissionFlagsBits.KickMembers],
  };
  