import React from 'react'
import './CartWidget.css'

const CartWidget = ({itemCount}) => {
return (
    <div className='cart-widget'>
        🛒
        <span className='item-count'>{itemCount}</span>
        </div>
)
}

export default CartWidget