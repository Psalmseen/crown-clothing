import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const  publishableKey = 'pk_test_51J8P2XBf3kwjkSiDhCDTwTiBA01NK3BEGereglSxjlSfrgE3AjiQXeYwZhMMDLqVBhVmlvMW1zfs3cCliPXzsRmx00Auq6ZwLX'

    const onToken = token => { console.log(token); alert('Payement Successful')}
    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton