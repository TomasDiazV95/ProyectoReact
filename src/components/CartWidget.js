import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Count from './Count';

const CartWidget = () => {

    return(
        <>
        <ShoppingCartIcon color="success" fontSize="large" />
        <Count/>
        </>
    )

}

export default CartWidget;