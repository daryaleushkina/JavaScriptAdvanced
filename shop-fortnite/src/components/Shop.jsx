import {useContext, useEffect} from 'react'
import {API_URL} from './config';
import {Preloader} from "./Preloader";
import {GoodsList} from "./GoodsList"
import {Cart} from "./Cart";
import {BasketList} from "./BasketList";
import {Alert} from "./Alert";
import {ShopContext} from "../context";

function Shop() {

    const {
        goods,
        loading,
        order,
        isBasketShow,
        alertName,
        setGoods
    } = useContext(ShopContext)
    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                'Authorization': "e1916875-44d8ae47-7091b38d-aa4e6ccb"
            },
        })
            .then((response) => response.json())
            .then((data) => {
                data.featured && setGoods(data.featured)
            });
    }, []);

    return (
        <main className="container content">
            <Cart quantity={order.length}/>
            {loading ? (
                <Preloader/>
            ) : (
                <GoodsList/>
            )}
            {
                isBasketShow && <BasketList/>
            }
            {
                alertName && <Alert/>
            }
        </main>
    )
}

export {Shop}