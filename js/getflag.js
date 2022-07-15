/*export default function getFlag(){

                var firstName = process.argv[3]

                var lastName = process.argv[5]

                var greeting = process.argv[7]

                console.log(`Seu nome e ${firstName} ${lastName} ${greeting}`)
 
}*/



export default  function getFlagValue(flag){
    const index = process.argv.indexOf(flag) + 1
    return process.argv[index];
}

