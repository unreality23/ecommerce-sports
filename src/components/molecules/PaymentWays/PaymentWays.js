import React from "react";

const PaymentWays = () => {
  const paymentWays = [
    { link: "/payments/amex-svg.svg", alt: "Amex" },
    { link: "/payments/apple-pay.svg", alt: "Apple Pay" },
    { link: "/payments/paypal.svg", alt: "Paypal" },
    { link: "/payments/klarna.svg", alt: "Klarna" },
  ];

  return (
    <div className="m-auto mb-5 flex flex-row">
      {paymentWays.map(({ link, alt }, index) => (
        <div className="mr-2.5 h-7 rounded bg-white" key={index}>
          <img src={link} alt={alt} className="h-full" />
        </div>
      ))}
    </div>
  );
};

export default PaymentWays;
