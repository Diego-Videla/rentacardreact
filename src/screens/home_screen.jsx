import React from "react";
import { Header } from "../components/header/header";
import { CategoryWidget } from "../components/categories/category_widget/category_widget";
import { ProductWidget } from "../components/products/product_widget/product_widget";
import { Footer } from "../components/footer/footer";
import { Navbar } from "../components/navbar/navbar";
import { HomeLayout } from "../components/layout/home_layout";
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