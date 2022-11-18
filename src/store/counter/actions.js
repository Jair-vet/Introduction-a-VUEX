import getRandomInt from '../../helpers/getRandomInt'


export const incrementRandomInt = async ({ commit }) => {
            
    commit('setLoading', true) // Disable : true
    
    const randomInt = await getRandomInt()
    
    commit('incrementBy', randomInt)

    commit('setLoading', false) // Activamos de nuevo despues de obtener el dato
}
