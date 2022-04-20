const fs = require("fs");
var colors = require("colors");

const tabla = async (num, lista = false, hasta = 10) => {
  let LaTabla = "";

  try {
    return new Promise((resolve) => {
      for (let i = 1; i <= hasta; i++) {
        LaTabla += `${num} x ${i} = ${num * i} \n`;
      }
      if (lista) {
        console.log("====================".gray);
        console.log(`tabla de ${num}`);
        console.log("====================".blue);
        console.log(LaTabla.green);
      }
      fs.writeFileSync(`./salida/tabla-de-${num}`, LaTabla);
      resolve("Todo marcha bien");
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  tabla,
};
