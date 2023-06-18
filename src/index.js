require('dotenv').config();
const { Client, Intents, ActivityType } = require('discord.js');
const eventHandler = require('./handlers/eventHandler');
const path = require('path');
const getAllFiles = require('./getAllFiles');

const getLocalCommands = require('./utils/getLocalCommands');

const client = new Client({
  intents: [
    Intents.FLAGS.Guilds,
    Intents.FLAGS.GuildMembers,
    Intents.FLAGS.GuildMessages,
    Intents.FLAGS.MessageContent,
  ],
});

const status = [
  {
    name: 'Under Ctrl',
    type: ActivityType.STREAMING,
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    name: 'Custom Status 1',
  },
  {
    name: 'Custom Status 2',
    type: ActivityType.WATCHING,
  },
  {
    name: 'Custom Status 3',
    type: ActivityType.LISTENING,
  },
];

client.on('ready', () => {
  console.log(`✅ ${client.user.tag} is online.`);

  setInterval(() => {
    const random = Math.floor(Math.random() * status.length);
    client.user.setActivity(status[random]);
  }, 10000);
});

eventHandler(client);

client.login(process.env.TOKEN);
