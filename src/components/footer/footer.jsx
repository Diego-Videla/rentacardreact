import React from "react";
import { ConteinerFooter, FooterImg, FooterInfo } from "./styles";

export const Footer=()=>{
    return(
        <ConteinerFooter>
            <FooterInfo>
                <a href="/#">
                    Términos de uso
                </a>
                <a href="/#">
                    Trabaja con nosotros
                </a>
                <a href="/#">
                    Soporte 
                </a>
            </FooterInfo>
            <FooterImg>
            
                <img src="./src/assets/img-logo-ins.png" alt="Logo Instagram" />
                <img src="./src/assets/img-logo-twitter.png" alt="Logo Twitter" />
                <img src="./src/assets/img-logo-face.png" alt="Logo Facebook" />
            </FooterImg>
        </ConteinerFooter>
    )
}