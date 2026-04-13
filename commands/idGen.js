export default function getNextId(data) {
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