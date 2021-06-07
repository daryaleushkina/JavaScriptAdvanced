import {useContext} from "react";
import {ShopContext} from "../context";

function BasketItem(props) {

    const {
        id,
        name,
        price,
        quantity
    } = props

    const {removeFromBasket, addToBasket, deleteToBasket } = useContext(ShopContext)


    return <li className="collection-item">
            {name}
            <span>
                <i className='material-icons basket-quantity'
                   onClick={() =>
                       deleteToBasket(id)}>
                    remove
                </i>
                {quantity}
                <i className='material-icons basket-quantity'
                   onClick={() =>
                       addToBasket({
                           id,
                           name,
                           price
                       })
                   }>
                    add
                </i>
            </span>

            = {price*quantity} руб.
            <span className="secondary-content"
                  onClick={()=>removeFromBasket(id)}>
                    <i className='material-icons basket-delete' onClick={removeFromBasket}>close</i>
                </span>
            </li>

}

export {BasketItem}