const yargs = require('yargs')
const argv = require("yargs")
.option("b",{
    alias: 'base',
    type: 'number',
    demandOption: true
}).option("l",{
    alias: "lista",
    type: "boolean",
})
.option("h",{
    alias: "hasta",
    type:"number",
})
.check((argv, option)=>{
    if(isNaN(argv.b)){
       throw'b tiene que ser un numero'
    }else {return true}
})
.argv

module.exports = argv