import {ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART} from './constant'


const cartData=(data=[], action)=>{


    // if(action.type === ADD_TO_CART){
    //     data = action.data
    //     console.log('Reducer called', action)
    //     return action.data
    // }else{
    //     return 'No Action MAtched'
    // }


    switch(action.type){
        case ADD_TO_CART:
            //add to cart logic
            console.log('Reducer called', action)
            return [action.data, ...data];

        case REMOVE_FROM_CART:
                //add to cart logic
                console.log("REMOVE_FROM_CART", action)
                data.length = data.length? data.length - 1 : data;
                return [...data];

        case EMPTY_CART:
            console.log("EMPTY_CART")
           return data = []

        default: 
            return []
    }
}


export default cartData;