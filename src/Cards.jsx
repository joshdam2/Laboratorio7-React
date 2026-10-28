import {useState} from "react";

const Cards= ({nombre,img,onlike})=>{
    const [likes, setLikes] = useState(0);
    
 
    const  handleClick=()=>{
        
        setLikes(likes + 1);
        onlike();

    };
    return(
        <div 
        style={{
            border: '1px solid #ccc',
            padding: '20px',
            margin: '10px',
            borderRadius: '10px',
            alignItems: 'center',
            textAlign: 'center',

        }}>
           <img alt={nombre} src={img} width='150px' height='150px'/>
           <h3>{nombre}</h3>   
           < button 
            style={{
             with: '100px',
             padding: '6px',
             margin: '10px',
             backgroundColor: 'rgb(87,222,116)',
             border: 'none',
             borderRadius: '5px',
             fontSize: '16px',
             fontWeight: 'bold',
             color: 'white',
             cursor: 'pointer' }}
             onClick={handleClick}
             >Like {likes}
             </button>
             {likes > 3 && <p style={{
             color:'black   ', 
             fontWeight:'bold'}}
             > Musica mas escuchada </p>}
        </div>
    );
};
export default Cards;