import Cards from "./Cards.jsx"
import { useState } from "react";
const Listas = () => {
    const musica=[
         {id:1, nombre:"Dealer", imagen:'Dealer.jpg'},
        ,{id:2, nombre:"Ghost Boy",imagen:'ghostboy.jpg'}
        ,{id:3, nombre:"Veins",imagen:'veins.jpg'}
        ,{id:4, nombre:"Chicle",imagen:'chicle.jpg'}
        ,{id:5, nombre:"Gym Class",imagen:'gymclass.jpg'}
        ,{id:6, nombre:"Which Blades",imagen:'whichblades.jpg'}
        ,{id:7, nombre:"Save That Shit",imagen:'savethatshit.jpg'}
        ,{id:8, nombre:"Start Shopping",imagen:'startshopping.jpg'}
        ,{id:9, nombre:"Art Deco",imagen:'artdeco.jpg'}
        ,{id:10, nombre:"Teen Romance",imagen:'teenromance.jpg'}

    ];
    const [total, setTotal] = useState(0);
    const [busqueda, setBusqueda] = useState("");
    const musicaFiltrada = musica.filter((cancion) =>
         cancion.nombre.toLowerCase().includes(busqueda.toLowerCase()));
  return (
    <div style={{
        padding:'10px',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
    }}>
      <h1>Total de likes de música :{total}</h1>
      <input 
      style={{
        padding:'10px',
        marginBottom:'20px',
        with:'400px',
        borderRadius:'5px',
        border:'1px solid #ccc'
      }}
      type="text" 
      placeholder="Ingresar nombre de la canción" 
      value={busqueda}
      onChange ={(e)=>{setBusqueda(e.target.value)}}/>
      <div style={{
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'center',

        gap:'10px'}}> 
        {musicaFiltrada.length === 0 && (
            <p>No se encontraron las canciones con el nombre :"{busqueda}".</p>
        )}
        {musicaFiltrada.map((cancion)=>{
            return(
                <Cards 
                key={cancion.id}
                nombre={cancion.nombre}
                img={cancion.imagen}
                onlike={() => {setTotal(total + 1)}} />
 
            )
        })}
      </div>
    </div>
  )
}

export default Listas
