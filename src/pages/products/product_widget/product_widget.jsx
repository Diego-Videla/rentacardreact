import {React,useState} from "react";
import { productos } from "../../../data/productos";
import { ProductCard } from "../product_card/product_card";
import { ButtonConteiner, Conteiner, ConteinerFilter, ConteinerProduct, FilterAño, FilterMarca, Filterkm } from "./styles";

export const ProductWidget=()=>{
    const [Produc, setProduc]=useState(productos)
    const buscar=()=>{
        let estado=false;
        let filtrado=productos;
        if(marca.value.trim().length)
        {
            filtrado= filtrado.filter((item)=> (item.marca.toLowerCase())== (marca.value.toLowerCase()));
            setProduc(filtrado);
            estado=true;
        }
        if((desde.value.trim().length) && (hasta.value.trim().length) )  
        {
            filtrado= filtrado.filter((item)=> item.año>= desde.value && item.año<= hasta.value );
            setProduc(filtrado);
            estado=true;
        }
        if((desdekm.value.trim().length) && (hastakm.value.trim().length) )  
        {
            filtrado= filtrado.filter((item)=> item.km>= desdekm.value && item.km<= hastakm.value );
            setProduc(filtrado);
            estado=true;
        }
        if(!estado)
        {
            setProduc(productos)
        }
    }
    return(
        <Conteiner>
            <h2>Vehiculos</h2>
            <ConteinerFilter>
                <FilterMarca>
                    <label >Marca: </label>
                        <input
                        type='text'
                        placeholder='Marca'
                        id='marca'
                        name='marca'
                    />
                </FilterMarca>
                <FilterAño>
                    <label >Año:</label>
                    <input
                    type="number"
                    placeholder='Año'
                    id='desde'
                    name='desde'
                    />
                    <label> Hasta: </label>
                    <input
                    type="number"
                    placeholder='Año'
                    id='hasta'
                    name='hasta'
                    />
                </FilterAño>
                <Filterkm>
                    <label >Kms:</label>
                    <input
                    type="number"
                    placeholder='Km'
                    id='desdekm'
                    name='desdekm'
                    />
                    <label> Hasta: </label>
                    <input
                    type="number"
                    placeholder='Km'
                    id='hastakm'
                    name='hastakm'
                    />
                </Filterkm>
                <ButtonConteiner>
                    <button onClick={()=>buscar()}>Buscar</button>
                </ButtonConteiner>
            </ConteinerFilter>
            <ConteinerProduct>
                {
                    Produc.map((item)=> <ProductCard  key={item.id} {...item} />)
                }
            </ConteinerProduct>
        </Conteiner>
    )
}