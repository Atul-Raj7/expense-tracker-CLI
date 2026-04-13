import readFile from './functions/readFile.js';
import writeFile from './functions/writeTask.js';
import { Command } from 'commander';
const expense = new Command();

const timeStamp = new Date().toString().split("GMT")[0].trim()

function getNextId(data) {
    const ids = data.map(item => item.id)
    let nextId = 0
    for(const id of ids){
        if(id !== nextId){
            return nextId
        }
        nextId++
    }
    return nextId
}

expense
    .command('add')
    .option('-d,--description [description]','expense description')
    .option('-a,--amount <amount_spent>','money spent')
    .action((options) => {
        const expenses = readFile()
        const newExpense = {
            id: getNextId(expenses),
            description: options.description,
            amount: Number(options.amount),
            date: timeStamp
        }
        expenses.push(newExpense)
        writeFile(expenses)
        console.log(`Expense added successfully ID:${newExpense.id}`)
    })

expense
    .command('update')
    .option('--id <id>', 'expense record id')
    .option('-a,--amount <amount_spent>','money spent')
    .option('-d,--description [description]','expense description')
    .action((options) => {
        const expenses = readFile()
        const updateExpense = expenses.find(item => item.id === Number(options.id))
        if(updateExpense){
            updateExpense.description = options.description,
            updateExpense.amount = Number(options.amount),
            updateExpense.date = timeStamp
        }
        writeFile(expenses)
        console.log(`Expense record ID:${options.id} updated \n\t ${JSON.stringify(updateExpense, null, 2)}`)
    })

expense.parse()