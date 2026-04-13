import readFile from '../utils/readFile.js';
import writeFile from '../utils/writeTask.js';
import idGen from './idGen.js';

const timeStamp = new Date().toString().split("GMT")[0].trim()

export default function add (options) {
    const expenses = readFile()
    const newExpense = {
        id: idGen(expenses),
        description: options.description,
        amount: Number(options.amount),
        date: timeStamp
    }
    expenses.push(newExpense)
    writeFile(expenses)
    console.log(`Expense added successfully ID:${newExpense.id}`)
}