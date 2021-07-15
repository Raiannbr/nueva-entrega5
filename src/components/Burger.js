import React from 'react'

const Burger = ({burger,cart,setCart,burgers})=>{

    //constante que guarda las propiedades del estado de las burgas
    const {nombre, precio, id} = burger;

    //funcion para agregar burgas al cart
    const addBurger = (id) =>{

        //filtro las burgsa por el id
        const burger = burgers.filter((burger)=> burger.id === id )

        setCart([...cart, ...burger]);
        //console.log(cart.length);
    };

    //funcion para eliminar burga

   const delBurger = (id) => {
       const burgers = cart.filter(burger => burger.id)
       setCart(...burgers)
   }
    

    return(
        <div>
            <ul>
                <li>{nombre}</li>
                <li>${precio}</li>

                {burgers ? (
                    
                        <button type='button' onClick={ ()=> addBurger(id) }>Agregar al carrito</button>
                ) : (
                    <div>
                        <button type='button' onClick={()=> delBurger(id)}>Confirmar</button> 

                        <button type='button' onClick={()=> delBurger(id)}>Eliminar</button>
                    </div>
                )}  
            </ul>
        </div>
    );

};

export default Burger;