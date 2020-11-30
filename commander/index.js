const { program } = require('commander');
program.version('0.0.1');

program
  .command('test')
  .action((source, destination) => {
    console.log('test command called');
  });

program.allowUnknownOption(true)
  .action(()=>{
     console.log('default command called~~~~~~~~~~')
   })

program.parse(process.argv)
