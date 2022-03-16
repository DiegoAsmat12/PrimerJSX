import "./ListaTareas.css";
import React, {Component} from 'react'
class ListaTareas extends Component{
    render(){
        const {lista} = this.props;
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
    

}

export default ListaTareas;