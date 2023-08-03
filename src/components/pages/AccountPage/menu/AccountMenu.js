import React, { useContext } from "react";
import { AccountContext } from "../../../../contexts/AccountContext";

const AccountMenu = () => {
  const { components, changeStep } = useContext(AccountContext);

  return (
    <ul className="flex flex-col px-5">
      {Object.keys(components).map((key, index) => (
        <li
          className={`mb-2 cursor-pointer text-black transition-all hover:text-timber-green`}
          key={key}
          onClick={() => changeStep(key)}
        >
          {components[key]}
        </li>
      ))}
    </ul>
  );
};

export default AccountMenu;
