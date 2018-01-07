const pageMain = (state = {}, action) => {
    
    const NAMESPACE = 'app/views/main/'

    switch (action.type) {
        case NAMESPACE + 'SET_PAGE_TITLE':
        case NAMESPACE + 'SET_RANDOM_NUMBER':
            return {
                ...state,
                ...action.payload
            }
    
        default:
            return state
    }
}

export default { pageMain }