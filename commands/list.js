import readFile from '../utils/readFile.js';

export default function list(){
    const expense = readFile()
    for(const item of expense){
        console.log(`${JSON.stringify(item, null, 2)}`)
    }
}