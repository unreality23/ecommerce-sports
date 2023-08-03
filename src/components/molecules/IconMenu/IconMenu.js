import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconMenu = ({ classNameProp, iconTypes }) => {
  return (
    <ul className={`flex desktop:gap-x-4 ${classNameProp}`}>
      {iconTypes.map(
        (
          {
            iconType,
            link,
            extraClass,
            iconPrefix,
            text,
            hoverFunction,
            textPrefix,
          },
          index,
        ) => (
          <li
            className={`relative text-lg leading-6 hover:duration-200 ${extraClass}`}
            key={index}
            onMouseEnter={hoverFunction}
          >
            {textPrefix && (
              <div className="absolute -right-3 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-timber-green text-center text-xs text-white">
                {textPrefix}
              </div>
            )}
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
