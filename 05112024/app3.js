// otra forma de import6ar los modulos de node
const os = require('node:os');
console.log('Informacion del SO:');
console.log('________________________________');
console.log('NOmbre del SO:', os.platform());
console.log('Version del SO',os.release());
console.log('Arquitectura:',os.arch());
console.log('CPs',os.cpus());
console.log('Memoria libre:',os.freemem()/1024/1024);
console.log('Memoria total:',os.totalmem()/1024/1024);
console.log('uptime',os.uptime()/60/60);