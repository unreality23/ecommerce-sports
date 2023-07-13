import React from 'react';

const PaymentWays = () => {
    const paymentWays = [
        {link: '/payments/amex-svg.svg', alt: 'Amex'},
        {link: '/payments/apple-pay.svg', alt: 'Apple Pay'},
        {link: '/payments/paypal.svg', alt: 'Paypal'},
        {link: '/payments/klarna.svg', alt: 'Klarna'},

    ]

    return (
        <div className="flex flex-row m-auto mb-5">
            {paymentWays.map(({link, alt}, index) => (
                <div className="bg-white rounded h-7 mr-2.5">
                    <img src={link} alt={alt} className="h-full"/>
                </div>

            ))}
        </div>

    )
}

export default PaymentWays;