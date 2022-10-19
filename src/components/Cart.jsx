import React from 'react'

const Cart = (props) => {

    return (
        <>

            <div className="cart">
                <h1>Phone</h1>
                <h1>Price: 00</h1>
                <button onClick={() =>
                    props.addCartHandler({ love: "Fucrandika chela" })}>
                    Add to cart</button>
            </div>

        </>
    )
}

export default Cart