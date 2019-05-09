const initState = {
    sample: [
        {
            id: 1,
            title: 'Coffee',
            desc: 'Coffee Latte'
        },
        {
            id: 2,
            title: 'Milk',
            desc: 'Chocolate Milk Shake'
        }
    ]
}

const storeReducer = (state = initState, action) => {
    return state
}

export default storeReducer