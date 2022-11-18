

const getRandomInt = () => {

    return new Promise( resolve => {
        const rndInt = Math.floor( (Math.random() * 20) + 1)

        setTimeout(() => {
            resolve( rndInt )
        }, 2000) // Emitir el valor 1 segundo despues
    })
}

export default getRandomInt