import React, { useContext } from 'react';
import {AccountContext} from '../../../../contexts/AccountContext';

const AccountMenu = () => {
  const { components, changeStep } = useContext(AccountContext);

  return (
      <ul className="flex flex-col px-5">
        {Object.keys(components).map((key, index) => (
          <li className={`cursor-pointer mb-2 hover:text-timber-green text-black transition-all`} key={key} onClick={() => changeStep(key)}>
            {components[key]}
          </li>
        ))}
      </ul>
  )
}

export default AccountMenu;
