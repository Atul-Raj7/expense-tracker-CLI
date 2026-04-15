import add from './commands/add.js';
import update from './commands/update.js';
import deleteExpense from './commands/delete.js';
import list from './commands/list.js';


import { Command } from 'commander';
const expense = new Command();

expense
    .command('add')
    .option('-d,--description [description]','expense description')
    .option('-a,--amount <amount_spent>','money spent')
    .action((options) => {
        add(options)
    })

expense
    .command('update')
    .option('--id <id>', 'expense record id')
    .option('-a,--amount <amount_spent>','money spent')
    .option('-d,--description [description]','expense description')
    .action((options) => {
        update(options)
    })

expense
    .command('delete')
    .option('--id <id>', 'expense record id')
    .action((options) => {
        deleteExpense(options)
    })

expense
    .command('list')
    .action(() => {
        list()
    })

expense.parse()