import axios from "axios";
import "./Home.css";
import { Header } from "../../components/Header";
import { useEffect, useState } from "react";
import { ProductsGrid } from "./ProductsGrid";

export default function Home({ cart }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("/api/products")
            .then((response) => {
                setProducts(response.data);
                //console.log(response.data);
            })
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