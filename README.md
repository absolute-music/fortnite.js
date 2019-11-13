# fortapi



A powerful and super light Fortnite stats API wrapper for Node.js
 
# Setup and Installation
1. Signup at [fortnitetracker](https://fortnitetracker.com/)
2. Navigate to the [api page](https://fortnitetracker.com/site-api) and generate a key
3. Install **fortapi** `npm install fortnite.js --save`
4. When using the wrapper, parse your generated key when creating the client


# Examples
```js
const fortnite = require('fortapi');

// Make sure you set your own key, otherwise it won't work!
// Check the README for more info on obtaining your key.

const client = new fortnite('my api key');

client.get('ickerio', fortnite.PC)
    .then(console.log) // Do stuff with the data
    .catch(console.error); // Catch if there is an error
```
