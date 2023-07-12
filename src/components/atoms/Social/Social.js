import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

library.add(faFacebook, faTwitter, faInstagram);

const Social = () => {
    const socials = [
        { iconType: 'facebook', link: 'https://www.facebook.com'},
        { iconType: 'twitter', link: 'https://www.instagram.com'},
        { iconType: 'instagram', link: 'https://www.twitter.com'},
    ]
    return (
        <ul className="lg:flex lg:gap-x-2">
            {socials.map(({iconType, link}, index) => (
                <li className="text-lg leading-6 text-gray-900" key={index}>
                    <NavLink to={link}>
                        <FontAwesomeIcon icon={['fab', iconType]}/>
                    </NavLink>
                </li>
            ))}
        </ul>
    )
}

export default Social;