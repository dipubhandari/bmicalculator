import { ADD_TO_CART } from "../constant";
const InitialState = {
    cartitem: []
}
export default function cartitem(state=InitialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            console.log("REDUCER" + action.data)
            console.log(action)
            return {
                ...state,
                cartitem: action.data
            }
            break;
        default:
            return state
    }
}