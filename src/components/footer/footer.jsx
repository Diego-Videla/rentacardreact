import React from "react";
import { ConteinerFooter, FooterImg, FooterInfo } from "./styles";
import logotwiter from './imgredes/img-logo-twitter.png';
import logoface from './imgredes/img-logo-face.png';
import logoins from './imgredes/img-logo-ins.png';

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
            
                <img src={logoins} alt="Logo Instagram" />
                <img src= {logotwiter} alt="Logo Twitter" />
                <img src={logoface} alt="Logo Facebook" />
            </FooterImg>
        </ConteinerFooter>
    )
}