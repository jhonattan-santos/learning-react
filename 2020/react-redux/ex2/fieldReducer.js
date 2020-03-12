const INITIAL_SATE = { value: 'Initialized state with redux' }

export default function(state = INITIAL_SATE, action) {
    switch (action.type) {
        case 'VALUE_CHANGED':
            return { value: action.payload }
            break
        default:
            return state
            break
    }
}