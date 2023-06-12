import { type } from "@testing-library/user-event/dist/type";
import { createContext, useState, useEffect} from "react";

const CartContext = createContext()

export default CartContext

export const CartProvider = ({ children }) => {

    const [cartItemQuantity, setCartItemQuantity] = useState(0);

    const [emptyCartFlag, setEmptyCartFlag] = useState();

    
    let addDataIntoLocalStorage = (data) => {

        if (localStorage.getItem('product_ids')) {

            let product_ids = localStorage.getItem('product_ids').split(",")

            if (product_ids.includes(data.toString())){
                alert('product already exists!')
            }
            else {
                product_ids.push(data.toString())
                localStorage.removeItem("product_ids");
                localStorage.setItem("product_ids", product_ids);

                let quantity = localStorage.getItem('product_ids').split(',').length
                setCartItemQuantity(quantity)
                alert('Them item vao cart thanh cong!')
            }
        } else {
            localStorage.setItem("product_ids", data.toString());
            setCartItemQuantity(1)
            alert('Khoi tao cart!')
        }

    };

    let RemoveItemFromCartLocalStorage = (id) => {

        if (localStorage.getItem('product_ids') !== null) {

            let product_ids = localStorage.getItem('product_ids').split(",")
            let remain_product_ids = product_ids.filter(function(product_id){
                return product_id != id
            })
            localStorage.removeItem("product_ids");
            localStorage.setItem("product_ids", remain_product_ids);
            
            setCartItemQuantity(prev => prev - 1)
            // alert(`Remove item with ${id} successfully!`)
            // alert(remain_product_ids)

            if (localStorage.getItem('product_ids').length == 0) {
                localStorage.removeItem("product_ids");
                setCartItemQuantity(0)
                // reload page
                window.location.reload(false);
            }
        }
    };

    let SetCartItemQuantity = () => {
        if (localStorage.getItem('product_ids') !== null) {

            let product_ids = localStorage.getItem('product_ids').split(",")
            setCartItemQuantity(product_ids.length)
        } 
    }

    let GetCartItemQuantity = () => {
        if (localStorage.getItem('product_ids') !== null && localStorage.getItem('product_ids').length !== 0) {

            let product_ids = localStorage.getItem('product_ids').split(",")
            return product_ids.length()
        } 
    }

    let getStorageValue = (key, defaultValue) => {
        // getting stored value
        const saved = localStorage.getItem(key);
        const initial = JSON.parse(saved);
        return initial || defaultValue;
      }

    return (
        <CartContext.Provider value={{
            addDataIntoLocalStorage,
            RemoveItemFromCartLocalStorage,
            cartItemQuantity,
            setCartItemQuantity,
            SetCartItemQuantity,
            emptyCartFlag, setEmptyCartFlag,
        }}>{children}</CartContext.Provider>
    )
}