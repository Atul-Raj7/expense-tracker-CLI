import readFile from '../utils/readFile.js';
import writeFile from '../utils/writeTask.js';

export default function deleteExpense(options) {
    const expense = readFile()
    const newExpense = expense.filter((item) => item.id !== Number(options.id))
    writeFile(newExpense)
    console.log(`Successfully Deleted ID:${options.id}`)
}