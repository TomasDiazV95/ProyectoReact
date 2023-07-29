import React from 'react'
import CartWidget from './CartWidget'

const styles = {
    container:{
        display: 1200 ? 'flex' : 'none',
        backgroundColor: "grey",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        
    },
    titulo:{
        //backgroundColor: "green",
        display: "flex",
        padding: '40px',
        paddingLeft: '100px'
    },    
    cart:{
        //backgroundColor: "red",
        display: "flex",
        padding: 40,
        paddingRight: 150,
    },
    nav:{
        //vbackgroundColor: "cyan",
        display: "flex",
        fontSize: 20,
        
    },
    x:{
        padding: 40,
    }
}

function NavBar(){

    return(
        <header style={styles.container}>
            <div>
                <h1 style={styles.titulo}>Mi Tienda Online</h1>
            </div>
            <div style={styles.nav}>
                <a style={styles.x} href="">Productos</a>
                <a style={styles.x} href="">Ubicacion</a>
                <a style={styles.x} href="">Politica</a>
            </div>
            <div style={styles.cart}>
                <CartWidget/>
            </div>
        </header>
    )
}

export default NavBar;