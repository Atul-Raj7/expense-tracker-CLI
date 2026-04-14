import readFile from '../utils/readFile.js';
import writeFile from '../utils/writeTask.js';

const timeStamp = new Date().toString().split("GMT")[0].trim()

export default function update(options) {
    const expenses = readFile()
    const updateExpense = expenses.find(item => item.id === Number(options.id))
    if (updateExpense) {
        updateExpense.description = options.description,
            updateExpense.amount = Number(options.amount),
            updateExpense.date = timeStamp
    }
    writeFile(expenses)
    console.log(`Expense record ID:${options.id} updated \n\t ${JSON.stringify(updateExpense, null, 2)}`)
}