//blocking example
// const fs = require('fs')
// const path = require('path')
// const result = fs.readFileSync(path.join(__dirname, './package.json'), 'utf-8')
// console.log(result)
// console.log(`Hi, I'm being blocked by previous instruction. I waited for it to be done...`)

const fs = require('fs/promises')
const path = require('path')
const read = async () => {
    const result = fs.readFile(path.join(__dirname, './package.json'), 'utf-8')
    console.log(result)
    return result 
}

read().then(r => console.log(r))
console.log(`Hi, I wasn't blocked by the previous process. It gave a promise that it will come back and went back into hide`) 

//You should avoid syncronous code for cpu intensive processes 