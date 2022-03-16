import "./ListaTareas.css";

const ListaTareas = ({lista}) =>{
    return (
        <div>
            <h1>Things I need to do:</h1>
            <ul>
            {
            lista.map( nombre =>{
               return( 
                   <li>{nombre}</li>
               )
            })
            }
            </ul>
        </div>
    );

}

export default ListaTareas;