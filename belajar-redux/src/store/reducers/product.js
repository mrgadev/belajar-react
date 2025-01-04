const initialState = {
    product: "HP"
}
const productReducer = (state = initialState, action) => {
    const {type, payload} = action
    switch(type) {
        default:
            return state
    }
}

export default productReducer