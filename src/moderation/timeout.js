const { Client, Interaction, ApplicationCommandOptionType, PermissionFlagsBits } = require('discord.js');
const ms = require('ms');

module.exports = {
  callback: async (client, interaction) => {
    // Your code here
  },

  name: 'timeout',
  description: 'Timeout a user.',
  options: [
    // Your options here
  ],
  permissionsRequired: [PermissionFlagsBits.MuteMembers],
  botPermissions: [PermissionFlagsBits.MuteMembers],
};
