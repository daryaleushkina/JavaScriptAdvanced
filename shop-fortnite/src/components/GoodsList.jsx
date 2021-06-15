import {GoodsItem} from './GoodItem';
import {ShopContext} from "../context";
import {useContext} from "react";

function GoodsList(props) {
    const {goods = []} = useContext(ShopContext);

    if (!goods.length) {
        return <h3>Nothing here</h3>;
    }

    return (
        <div className='goods'>
            {goods.map((good) => (
                <GoodsItem key={good.id} {...good}/>
            ))}
        </div>
    );
}

export {GoodsList};