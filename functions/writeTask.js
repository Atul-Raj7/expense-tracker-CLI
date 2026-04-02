import fs from "fs"
import path from "path"

const filePath = path.join(process.cwd(), '../expenseData.json')

export default function writeFile(data) {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8')
}