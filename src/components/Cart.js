import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../slices/cartSlice";
import "../../index.css";

const Cart=()=>{

    const dispatch=useDispatch();

    const cartItems=useSelector((store)=>store.cart.items);

    const handleClearCart=()=>{
        dispatch(clearCart());
    }

    return (
        <div className="cart">
            <div className="cart-header"><h1>Cart</h1></div>
            <div className="cart-clear" onClick={handleClearCart}>Clear Cart</div>
            {cartItems.length===0 && <h1>Your Cart is empty, please add items to your cart!!!!</h1>}
            <ItemList items={cartItems}/>
        </div>
    );
}

export default Cart;