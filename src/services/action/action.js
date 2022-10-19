import { ADD_TO_CART } from "../constant"
const atc = (data) => {
    console.log("THE DATA IN ACTION IS" + data)
    return {
        type: ADD_TO_CART,
        data: data
    }
}

export default atc