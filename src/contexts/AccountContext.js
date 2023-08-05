import React, { createContext, useState } from "react";
import AccountDetails from "../components/pages/AccountPage/sections/AccountDetails";
import AddressBook from "../components/pages/AccountPage/sections/AddressBook";
import OrderHistory from "../components/pages/AccountPage/sections/OrderHistory";
import PaymentDetails from "../components/pages/AccountPage/sections/PaymentDetails";
import Wishlist from "../components/pages/AccountPage/sections/Wishlist";

const AccountContext = createContext();

const AccountProvider = ({ children }) => {
  const [currentComponent, setCurrentComponent] = useState("AccountDetails");

  const components = {
    AccountDetails: <AccountDetails />,
    AddressBook: <AddressBook />,
    OrderHistory: <OrderHistory />,
    PaymentDetails: <PaymentDetails />,
    Wishlist: <Wishlist />,
  };

  const changeStep = (step) => {
    if (components.hasOwnProperty(step)) {
      setCurrentComponent(step);
    }
  };

  return (
    <AccountContext.Provider
      value={{ currentComponent, components, changeStep }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export { AccountContext, AccountProvider };
