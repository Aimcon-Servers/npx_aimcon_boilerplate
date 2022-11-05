#!/usr/bin/env node
import chalk from 'chalk';
import inquirer from 'inquirer';
import { createSpinner } from 'nanospinner';
import { exec } from 'child_process';
import fs from 'fs';

console.log(
  chalk.green(`   
    
    

      db      \`7MMF'\`7MMM.     ,MMF' .g8"""bgd   .g8""8q. \`7MN.   \`7MF'
     ;MM:       MM    MMMb    dPMM .dP'     \`M .dP'    \`YM. MMN.    M  
    ,V^MM.      MM    M YM   ,M MM dM'       \` dM'      \`MM M YMb   M  
   ,M  \`MM      MM    M  Mb  M' MM MM          MM        MM M  \`MN. M  
   AbmmmqMA     MM    M  YM.P'  MM MM.         MM.      ,MP M   \`MM.M  
  A'     VML    MM    M  \`YM'   MM \`Mb.     ,' \`Mb.    ,dP' M     YMM  
.AMA.   .AMMA..JMML..JML. \`'  .JMML. \`"bmmmd'    \`"bmmd"' .JML.    YM 



`)
);

console.log(chalk.green('\nCreate Script\n'));

let { script_name } = await inquirer.prompt([
  {
    name: 'script_name',
    type: 'input',
    message: 'Script name:',
  },
]);

let spinner = createSpinner(
  'Cloning repository (https://github.com/Aimcon-Servers/aimcon_boilerplate)'
).start();

const script_name_formatted = script_name.toLowerCase().replaceAll(' ', '-');

await exec(
  `git clone https://github.com/Aimcon-Servers/aimcon_boilerplate ${script_name_formatted}`,
  async () => {
    spinner.success(
      'Repository Cloned (https://github.com/Aimcon-Servers/aimcon_boilerplate)'
    );
    fs.rmSync(`${process.cwd()}/${script_name_formatted}/.git`, {
      recursive: true,
      force: true,
    });
    console.log(
      `\n${chalk.green(
        'Script created'
      )}\n\nStart developing your script:\ncd ${script_name_formatted}\n\nGood Luck! 🍀`
    );
  }
);
