import React from "react";

const styles = {
    container:{
        display: "flex",
        backgroundColor: '#282c34',
        alignItems: "center",
        color:"white",
        justifyContent: "space-around"
    }
}

function Prenda(props){
    return(
        <div>
            <h3>{props.nombre}</h3>
            <p>Valor: {props.valor}</p>
        </div>
    );
}

function ItemListContainer(){
    return(
        <div style={styles.container}>
            <Prenda nombre="Polera" valor="$2500"/>
            <Prenda nombre="Pantalon" valor="$3500"/>
            <Prenda nombre="Buzo" valor="$2000"/>
        </div>
    );
}

export default ItemListContainer;