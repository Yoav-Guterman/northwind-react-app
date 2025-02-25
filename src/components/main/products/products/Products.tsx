import { JSX, useEffect, useState } from "react";
import './Products.css'
import ProductModel from "../../../../models/product/product";
import Product from "../product/product";
import { NavLink } from "react-router-dom";
import useService from "../../../../hooks/useService";
import ProductService from "../../../../service/northwind/productService";

export default function Products(): JSX.Element {

    const [products, setProducts] = useState<ProductModel[]>([])
    const productService = useService(ProductService)

    useEffect(() => {
        (async () => {
            try {
                const products = await productService.getAllProducts()
                setProducts(products)
            } catch (e) {
                alert(e)
            }
        })()
    }, [])


    return (
        <div className="Products">
            <div className="CategoryContainer">
                <NavLink to="#">Categories</NavLink>
                <NavLink to="#">Categories</NavLink>
                <NavLink to="#">Categories</NavLink>
            </div>
            <div>
                <div className="topControls">
                    <input type="search" className="searchBar" placeholder="Search products..." />
                    <button className="addButton">Add Product</button>
                </div>
                <div className="productContainer">
                    {products.map(p => <Product key={p.id} ProductModel={p} />)}
                </div>
            </div>
        </div>
    )
}