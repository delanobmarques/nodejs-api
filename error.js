setTimeout(() => {
    throw new Error('oops .. an error')
}, 300)

//object that representes the current process you're in (the fiel system, the variables, the system, the hardware, ip address,...) 
process.on('uncaughtException', () => {})

process.on('unhandledRejection', () => {})