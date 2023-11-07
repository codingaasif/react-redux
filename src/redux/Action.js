import {ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART} from './constant'

export const AddToCart =(data)=>{

    console.log('AddToCart Called', data);
    return {
        type: ADD_TO_CART,
        data
    }
}


export const RemoveFromCart =(data)=>{

    console.log('RemoveFromCart Called', data);
    return {
        type: REMOVE_FROM_CART,
        data
    }
}



export const EmptyCart =()=>{

    console.log('EmptyCart Called');
    return {
        type: EMPTY_CART
    }
}
