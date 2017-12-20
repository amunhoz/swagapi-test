const path = require('path');

const apiParam = path.resolve(__dirname, "./app/config/api.json"); 
const  swapiFrame = require("./swagapi");

swapiFrame.start(apiParam);


