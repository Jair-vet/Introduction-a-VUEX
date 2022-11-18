

export const increment = ( state ) => {
    state.count ++
    state.lastMutation = 'increment'
}

export const incrementBy = ( state, value ) => {
    state.count += value
    state.lastMutation = 'IncrementBy  ' + value
    state.lastRandomInt = value
}

// Esperar a que se termine de realizar esa acción
export const setLoading = ( state, val ) => {
    state.isLoading = val
}
