import axios from "axios";
import "./Home.css";
import { Header } from "../../components/Header";
import { useEffect, useState } from "react";
import { ProductsGrid } from "./ProductsGrid";

export default function Home({ cart }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getHomeData = async () => {
            const response = await axios.get("/api/products")
            setProducts(response.data);
        }
        getHomeData();
    }, []); // Empty dependency array means this runs once on component mount

    return (
        <>
            <title>Ecommerce Project</title>

            <Header cart={cart} />
            <div className="home-page">
                <ProductsGrid products={products} />
            </div>
        </>

    )
}