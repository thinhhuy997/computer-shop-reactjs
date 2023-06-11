import { type } from "@testing-library/user-event/dist/type";
import { createContext, useState, useEffect} from "react";

const CartContext = createContext()

export default CartContext

export const CartProvider = ({ children }) => {

    let [cartInfo, setCartInfo] = useState({quantity: 0})

    
    let addDataIntoLocalStorage = (data) => {

        if (localStorage.getItem('product_ids') !== null) {

            let product_ids = localStorage.getItem('product_ids').split(",")

            console.log(product_ids)

            if (product_ids.includes(data.toString())){
                alert('product already exists!')
            }
            else {
                product_ids.push(data.toString())
                localStorage.removeItem("product_ids");
                localStorage.setItem("product_ids", product_ids);
                alert('add item to arr success!')
            }
        } else {
            localStorage.setItem("product_ids", data.toString());
            alert('Add item to cart successfully!')
        }

    };

    let getStorageValue = (key, defaultValue) => {
        // getting stored value
        const saved = localStorage.getItem(key);
        const initial = JSON.parse(saved);
        return initial || defaultValue;
      }

    return (
        <CartContext.Provider value={{
            cartInfo,
            setCartInfo,
            addDataIntoLocalStorage
        }}>{children}</CartContext.Provider>
    )
}