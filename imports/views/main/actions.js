const NAMESPACE = 'app/views/main/';

export const setPageTitle = (title) => {
    return {
        type: NAMESPACE + 'SET_PAGE_TITLE',
        payload: { title }
    }
}

export const setRandomNumber = () => {
    return {
        type: NAMESPACE + 'SET_RANDOM_NUMBER',
        payload: {
            randomNumber: Math.random()
        }
    }
}