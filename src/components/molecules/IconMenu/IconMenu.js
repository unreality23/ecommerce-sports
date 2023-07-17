import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IconMenu = ({classNameProp, iconTypes}) => {
    return (
        <ul className={`lg:flex lg:gap-x-4 ${classNameProp}`}>
            {iconTypes.map(({iconType, link, color, iconPrefix}, index) => (
                <li className={`text-lg leading-6 hover:duration-200 ${color}`} key={index}>
                    <NavLink to={link}>
                        <FontAwesomeIcon icon={[iconPrefix, iconType]}/>
                    </NavLink>
                </li>
            ))}
        </ul>
    )
}

export default IconMenu;