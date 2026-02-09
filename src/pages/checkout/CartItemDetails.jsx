import axios from "axios";
import { formatMoney } from "../../utils/money";
import { useState } from "react";

export function CartItemDetails({ cartItem, loadCart }) {
    const [isUpdatingQty, setIsUpdatingQty] = useState(false);
    const [quantity, setQuantity] = useState(cartItem.quantity);


    const deleteCartItem = async () => {
        await axios.delete(`/api/cart-items/${cartItem.productId}`)
        await loadCart();
    }

    const updateQuantityInput = (event) => {
        setQuantity(event.target.value);
    }

    const handleQuantityKeyDown = (event) => {
        const keyPressed = event.key;
        if (keyPressed === "Enter") {
            updateQuantity();
        } else if (keyPressed === "Escape") {
            setQuantity(cartItem.quantity);
            setIsUpdatingQty(false);
        }
    }

    const updateQuantity = async () => {
        if (isUpdatingQty) {
            await axios.put(`/api/cart-items/${cartItem.productId}`, {
                quantity: Number(quantity),
            })
            await loadCart();
            setIsUpdatingQty(false);
        } else {
            setIsUpdatingQty(true);
        }
    }


    return (
        <div className="cart-item-details">
            <div className="product-name">
                {cartItem.product.name}
            </div>
            <div className="product-price">
                {formatMoney(cartItem.product.priceCents)}
            </div>
            <div className="product-quantity">
                <span>
                    Quantity:{isUpdatingQty
                        ? <input type="text" style={{ width: 50 }} onChange={updateQuantityInput} value={quantity} onKeyDown={handleQuantityKeyDown} />
                        : <span className="quantity-label">{cartItem.quantity}</span>
                    }
                </span>
                <span className="update-quantity-link link-primary" onClick={updateQuantity}>
                    Update
                </span>
                <span className="delete-quantity-link link-primary" onClick={deleteCartItem}>
                    Delete
                </span>
            </div>
        </div>
    )
}