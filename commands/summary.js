import readFile from "../utils/readFile.js";

export default function summary(options) {
    if (Object.keys(options).length != 0) {
        const monthReport = readFile().filter(item => new Date(item.date).getMonth() + 1 === Number(options.month))
        const monthExpense = monthReport.reduce((sum, item) => sum += Number(item.amount), 0)
        console.log(monthExpense)
    }
    else {
        const totalReport = readFile().reduce((sum, item) => sum += Number(item.amount), 0)
        console.log(totalReport)
    }
}