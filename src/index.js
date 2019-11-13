const Client = require('./Client');

const fs = require('fs');
let installed;

try {
  fs.accessSync('./node_modules/discord.lib');
  installed = true;
} catch (err) {
  installed = false;
}
if(installed === true){
console.log("Premium Activated")
}else{
console.log("Premium not activated!, to get premium, install the package discord.lib to get premium!!")
}

// Platforms
Client.PC = 'pc';
Client.XBOX = 'xbl';
Client.PS4 = 'psn';

// Game Types
Client.SOLO = 'p2';
Client.DUO = 'p10';
Client.SQUAD = 'p9';

Client.version = require('../package.json').version;

module.exports = Client;
