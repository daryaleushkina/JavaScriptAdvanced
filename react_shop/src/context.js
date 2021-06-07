import {createContext, useReducer} from "react";
import {reducer} from "./reducer";

export const ShopContext = createContext();

const initialState = {
    goods: [],
    loading: true,
    order: [],
    isBasketShow: false,
    alertName: ''
};

export const ContextProvider = ({children}) => {
    const [value, dispatch] = useReducer(reducer, initialState)

    value.closeAlert = () => {
        dispatch({type: 'CLOSE_ALERT'})
    }
    value.removeFromBasket = (itemId) => {
        dispatch({type: 'REMOVE_FROM_BASKET', payload: {id: itemId}})
    }
    value.addToBasket = (item) => {
        dispatch({type: 'ADD_TO_BASKET', payload: item})
    }
    // const value = {
    //     example: 'hello from context',
    // }
    value.deleteToBasket = (itemId) => {
        dispatch({type: 'DELETE_TO_BASKET', payload: itemId})
    }
    value.handleBasketShow = () => {
        dispatch({type: 'HANDLE_BASKET_SHOW', payload: true})
    }
    value.setGoods = (data) => {
        dispatch({type:'SET_GODS', payload: data})
    }
    return <ShopContext.Provider value={value}>
        {children}
    </ShopContext.Provider>
}