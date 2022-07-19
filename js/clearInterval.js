const timeOut = 3000

const checking = () => console.log('checking!')

let interval = setInterval(finished, timeOut)
clearInterval(interval)



setTimeout( () => clearInterval(interval), 3000)