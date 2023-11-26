import React from "react";
import { Header } from "../components/header/header";
import { CategoryWidget } from "../components/categories/category_widget/category_widget";
import { Footer } from "../components/footer/footer";
import { Navbar } from "../components/navbar/navbar";
import { HomeLayout } from "../components/layout/Layout";
import { ProductWidget } from "../pages/products/product_widget/product_widget";
export const HomeScreen =() => {
    return(
        <>
            <Navbar/>
            <HomeLayout>
                <Header></Header>
                <CategoryWidget/>
                <ProductWidget/>
            </HomeLayout>
            <Footer/>
        </>
    )
}