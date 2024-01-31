import { ConteinerCard, ConteinerInfo, Conteinerimg } from "./styles"


export const CheckoutCard=({marca, Modelo,precio,imagen,id,cantidad})=>{
    return(
        <ConteinerCard>
            <Conteinerimg>
                <img src={imagen} alt="" />
            </Conteinerimg>
            <ConteinerInfo>
                <p>Marca:{marca} </p>
                <p>Modelo:{Modelo}</p>
                <p>Cantidad:{cantidad} </p>
                <p>${precio * cantidad}</p>
            </ConteinerInfo>
        </ConteinerCard>
    )
}