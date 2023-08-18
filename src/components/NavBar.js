import logo from '../assets/imagenlogo1.jpg';
import './nav.css';
import CartWidget from './CartWidget';
import { Link } from "react-router-dom"

const NavBar = () => {

    const categories = [
        { name: "Productos", id: 0, route: "/category/productos"},
        { name: "Nosotros", id: 1, route: "/category/nosotros"},
        { name: "Local", id: 2, route: "/category/local"},
        { name: "Contacto", id: 3, route: "/category/contacto"},
    ];

    return (
        <header className='navContainer'/* style={styles.container} */>
            <Link to="/"><img src={logo} alt=""  /></Link>
            <h1 className='tit' >Frutos Secos</h1>
            <nav style={styles.nav}>
                {categories.map((category) => <Link key={category.id} to={category.route}>{category.name}</Link>)}
            </nav>
            <Link style={styles.cart} to="/cart">< CartWidget /></Link>
        </header>
    )
}


const styles = {

    titulo:{
        backgroundColor: "green",
        display: "block",
        //padding: '40px',
        textAlign: "center",
        alignItems: "center",
        //paddingLeft: '1000px'
    },    
    cart:{
        //backgroundColor: "red",
        display: "flex",
        padding: 40,
        paddingRight: 150,
    },
    nav:{
        //backgroundColor: "cyan",
        display: "flex",
        fontSize: 20,
        
    },
    
}

export default NavBar;
