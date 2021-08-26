import React from 'react'

const CheckoutSteps = (props) => {
    return (
        <div className="row checkout-steps">
            <div className={props.step1 ? 'active' : ''}>Se connecter</div>
            <div className={props.step2 ? 'active' : ''}>Remplir votre addresse</div>
            <div className={props.step4 ? 'active' : ''}>Place Order</div>
        </div>
    )
}

export default CheckoutSteps;
