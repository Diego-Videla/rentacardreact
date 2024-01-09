import React from "react"
import { ConteinerInfoEmpresa, ConteinerRecommended, HeaderContainer, Home, ImgContainer,  InfoContainer, } from "./styles"
import img from './img-header.jpg';
import { CategoryWidget } from "../../components/categories/category_widget/category_widget";
import { ConteinerProduct } from "../products/product_widget/styles";
import { Recomendados } from "../../data/recomendados";
import { ProductCard } from "../products/product_card/product_card";
import { NavLink } from "react-router-dom";

export const Header =()=>{
    return(
        <Home>
            <h1>Renta Card</h1>
            <HeaderContainer>
                <InfoContainer>
                    <h2>Somos una empresa encargada de buscar el cliente indicado para su auto.Nos encargamos de todo, solo tienes que traer su vehículo, nosotros lo vendemos rápido y al mejor precio, haciendonos cargo de todos los trámites correspondientes.</h2>
                    < NavLink className="btncontacto" to='contact'> Contactanos</NavLink>
                </InfoContainer>
                <ImgContainer>
                <img src= {img} alt='Foto Portada' />
                </ImgContainer>
            </HeaderContainer>
            <ConteinerInfoEmpresa>
                <h2>Contamos con taller mecánico propio, para realizar un chequeo general de cada vehículo que disponemos para  la venta, para darle mayor tranquilidad tanto al comprador como
                    a el vendedor. Ademas te ofreceos un servicio postventa, para realizar todos los servis necesarios para el correcto mantenimiento
                    de su vehículo.
                </h2>
            </ConteinerInfoEmpresa>
            <CategoryWidget/>
            <ConteinerRecommended>
                <h2>Recomendados</h2>
                <ConteinerProduct>
                    {
                        Recomendados.map((item)=> <ProductCard  key={item.id} {...item} />)
                    }
                </ConteinerProduct>

            </ConteinerRecommended>
        </Home>
    )
}