import React, {useEffect,createContext, useState} from "react";


export const CarritoContext= createContext();
export const ContextCarrito=({children})=>{
    const [compras,setCompras]=useState(JSON.parse(localStorage.getItem('carrito')) || [])
    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(compras));
    },)
  
    const agregarCompra = ({marca, Modelo,precio,imagen,id}) =>
    {
        const cantidad=1;
        const items={marca, Modelo,precio,imagen,id,cantidad}
        const productInCart=compras.find((product)=>product.id === items.id)
        if(productInCart){
            setCompras(compras.map((producto)=>items.id=== producto.id
            ? {...producto, cantidad:producto.cantidad + 1} :producto) )
        }
        else{
        setCompras((compras) => [...compras,items])
        }
    }
    const borrarCompra=({id})=>
    {
        const productInCart=compras.find((product)=>product.id === id)
        if(productInCart.cantidad >1){
            setCompras(compras.map((producto)=>id=== producto.id
            ? {...producto, cantidad:producto.cantidad - 1} :producto))
        }
        else{
        setCompras(compras.filter((producto)=> id !== producto.id))
        }
    }
    const borrarItem= ({id})=>
    {
        setCompras(compras.filter((producto)=> id !== producto.id))
    }
    const borrarTodo=()=>{
        setCompras(() => [])
        localStorage.clear();
    }
    const cantItems=()=>{
        let cantidad=0;
        compras.map((items)=> cantidad= cantidad + items.cantidad)
        return cantidad
    }
    const precioTotal=()=>{
        let total=0;
        compras.map((items)=> total = total + items.precio * items.cantidad)
        return total
    }
    return (
       <CarritoContext.Provider value={{agregarCompra, compras,borrarCompra,borrarTodo,cantItems,precioTotal,borrarItem}}>
          {children}
        </CarritoContext.Provider>
    )
    
}