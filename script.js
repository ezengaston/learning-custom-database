const insertParser = require("./parsers/insert");

const insertCommand = insertParser('INSERT { "a": 1 } INTO test');
