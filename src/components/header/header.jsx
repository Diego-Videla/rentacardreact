import React from "react"
import { HeaderContainer, ImgContainer,  InfoContainer,  } from "./styles"

export const Header =()=>{
    return(
        <HeaderContainer>
            <InfoContainer>
                <h1>Renta Card, la empresa número uno en venta de autos</h1>
                <h2>Somos una empresa dedicada en buscar el cliente indicado para su auto.Nos encargamos de todo, solo tienes que traer su vehículo, nosotros lo vendemos rápido y al mejor precio, haciendonos cargo de todos los trámites correspondientes.</h2>
                <button>Contactanos</button>
            </InfoContainer>
            <ImgContainer>
               <img src="./src/assets/img-header.jpeg "alt='Foto Portada' />
            </ImgContainer>
        </HeaderContainer>

    )
}