import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconMenu = ({ classNameProp, iconTypes }) => {
  return (
    <ul className={`flex desktop:gap-x-4 ${classNameProp}`}>
      {iconTypes.map(
        ({ iconType, link, extraClass, iconPrefix, text }, index) => (
          <li
            className={`text-lg leading-6 hover:duration-200 ${extraClass}`}
            key={index}
          >
            <NavLink to={link}>
              <FontAwesomeIcon icon={[iconPrefix, iconType]} /> {text}
            </NavLink>
          </li>
        ),
      )}
    </ul>
  );
};

export default IconMenu;
