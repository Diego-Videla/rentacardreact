import React from "react"
import { HeaderContainer, Home, ImgContainer,  InfoContainer, } from "./styles"
import img from './img-header.jpg';
import { CategoryWidget } from "../../components/categories/category_widget/category_widget";

export const Header =()=>{
    return(
        <Home>
            <h1>Renta Card</h1>
            <HeaderContainer>
                <InfoContainer>
                    <h2>Somos una empresa dedicada en buscar el cliente indicado para su auto.Nos encargamos de todo, solo tienes que traer su vehículo, nosotros lo vendemos rápido y al mejor precio, haciendonos cargo de todos los trámites correspondientes.</h2>
                    <button>Contactanos</button>
                </InfoContainer>
                <ImgContainer>
                <img src= {img} alt='Foto Portada' />
                </ImgContainer>
            </HeaderContainer>

            <CategoryWidget/>
        </Home>
    )
}