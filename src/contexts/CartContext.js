import { createContext, useState} from "react";
import Swal from 'sweetalert2'

const CartContext = createContext()

export default CartContext

export const CartProvider = ({ children }) => {

    const [cartItemQuantity, setCartItemQuantity] = useState(0);

    const [emptyCartFlag, setEmptyCartFlag] = useState();

    // add product id into localstorage
    let addDataIntoLocalStorage = (data) => {

        if (localStorage.getItem('product_ids')) {

            let product_ids = localStorage.getItem('product_ids').split(",")

            if (!product_ids.includes(data.toString())){
                product_ids.push(data.toString())
                localStorage.removeItem("product_ids");
                localStorage.setItem("product_ids", product_ids);

                let quantity = localStorage.getItem('product_ids').split(',').length
                setCartItemQuantity(quantity)
                
                Swal.fire({
                    position: 'bot-end',
                    icon: 'success',
                    title: 'Sản phẩm đã được thêm vào giỏ hàng.',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        } else {
            localStorage.setItem("product_ids", data.toString());
            setCartItemQuantity(1)
            
            Swal.fire({
                    position: 'bot-end',
                    icon: 'success',
                    title: 'Sản phẩm đã được thêm vào giỏ hàng.',
                    showConfirmButton: false,
                    timer: 1500
                    })
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