import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

library.add(faFacebook, faTwitter, faInstagram);

const Social = ({classNameProp}) => {
    const socials = [
        { iconType: 'facebook', link: 'https://www.facebook.com', color: 'hover:text-blue-600'},
        { iconType: 'twitter', link: 'https://www.twitter.com', color: 'hover:text-blue-400'},
        { iconType: 'instagram', link: 'https://www.instagram.com', color: 'hover:text-pink-500'},
    ]
    return (
        <ul className={`lg:flex lg:gap-x-4 ${classNameProp}`}>
            {socials.map(({iconType, link, color}, index) => (
                <li className={`text-lg leading-6 hover:duration-200 ${color}`} key={index}>
                    <NavLink to={link}>
                        <FontAwesomeIcon icon={['fab', iconType]}/>
                    </NavLink>
                </li>
            ))}
        </ul>
    )
}

export default Social;