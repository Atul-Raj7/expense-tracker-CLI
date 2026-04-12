import fs from "fs"
import path from "path"

const filePath = path.join(process.cwd(),'./expenseData.json')

export default function readFile() {
    if(fs.existsSync(filePath)){
        const data = fs.readFileSync(filePath, 'utf8')
        return JSON.parse(data)
    }
    return []
}