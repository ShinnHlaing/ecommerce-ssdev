import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router"
import "./Checkout.css"
import "./checkout-header.css"
import { PaymentSummary } from "./PaymentSummary"
import { OrderSummary } from "./OrderSummary";

export function Checkout({ cart, loadCart }) {
    const [deliveryOptions, setDeliveryOptions] = useState([]);
    const [paymentSummary, setPaymentSummary] = useState(null);

    useEffect(() => {
        const fetchCheckoutData = async () => {
            let response = await axios.get("/api/delivery-options?expand=estimatedDeliveryTime")
            setDeliveryOptions(response.data);

            response = await axios.get("/api/payment-summary")
            setPaymentSummary(response.data);
        }
        fetchCheckoutData();
    }, [])
    // Empty dependency array means this runs once on component mount
    useEffect(() => {
        const fetchPaymentSummary = async () => {
            let response = await axios.get("/api/payment-summary")
            setPaymentSummary(response.data);
        }
        fetchPaymentSummary();
    }, [cart])
    return (
        <>
            <title>Checkout</title>
            <div className="checkout-header">
                <div className="header-content">
                    <div className="checkout-header-left-section">
                        <Link to="/">
                            <img className="logo" src="images/logo.png" />
                            <img className="mobile-logo" src="images/mobile-logo.png" />
                        </Link>
                    </div>

                    <div className="checkout-header-middle-section">
                        Checkout (<a className="return-to-home-link"
                            href="/">3 items</a>)
                    </div>

                    <div className="checkout-header-right-section">
                        <img src="images/icons/checkout-lock-icon.png" />
                    </div>
                </div>
            </div>

            <div className="checkout-page">
                <div className="page-title">Review your order</div>

                <div className="checkout-grid">
                    <OrderSummary deliveryOptions={deliveryOptions} cart={cart} loadCart={loadCart} />
                    <PaymentSummary paymentSummary={paymentSummary} />
                </div>
            </div>
        </>
    )
}