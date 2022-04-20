const yargs = require('yargs')
const argv = require("yargs")
.option("b",{
    alias: 'base',
    type: 'number',
    demandOption: true,
    description:"Se establece la base de la tabla de multiplicar"
}).option("l",{
    alias: "lista",
    type: "boolean",
    description:"Opcional para listar por consola la tabla creada"

})
.option("h",{
    alias: "hasta",
    type:"number",
    description:"Define el numero maximo hasta donde queremos que llegue la tabla"

})
.check((argv, option)=>{
    if(isNaN(argv.b)){
       throw'b tiene que ser un numero'
    }else {return true}
})
.argv

module.exports = argv