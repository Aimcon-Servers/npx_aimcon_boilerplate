#!/usr/bin/env node
import chalk from 'chalk';
import inquirer from 'inquirer';
import { createSpinner } from 'nanospinner';
import { exec } from 'child_process';

console.log(chalk.cyan('\nCreate Discord Bot'));

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

await exec(
    `git clone https://github.com/Aimcon-Servers/aimcon_boilerplate ${script_name
        .toLowerCase()
        .replaceAll(' ', '-')}`,
    async () => {
        spinner.success(
            'Repository Cloned (https://github.com/Aimcon-Servers/aimcon_boilerplate)'
        );

        console.log(
            `\n${chalk.green(
                'Script created'
            )}\n\nStart developing your script:\ncd ${project_name
                .toLowerCase()
                .replaceAll(' ', '-')}\n\nGood Luck! 🍀`
        );
    }
);
