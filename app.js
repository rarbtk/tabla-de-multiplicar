let { tabla } = require("./multiplicacion");
const fs = require("fs");
let argv = require("./config/yargs");

tabla(argv.b, argv.l,argv.h)
  .then((mensaje) => console.log(mensaje))
  .catch((err) => console.log(err));
