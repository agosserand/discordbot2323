const fs = require('fs');
const path = require('path');

const getLocalCommands = () => {
  const commandsPath = path.join(__dirname, '..', 'commands');
  const commandFiles = fs.readdirSync(commandsPath);

  const localCommands = [];

  for (const file of commandFiles) {
    const commandPath = path.join(commandsPath, file);
    const command = require(commandPath);
    localCommands.push(command);
  }

  return localCommands;
};

module.exports = getLocalCommands;
