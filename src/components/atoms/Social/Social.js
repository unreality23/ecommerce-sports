import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

library.add(faFacebook, faTwitter, faInstagram);

const Social = () => {
    const socials = [
        { iconType: 'facebook', link: 'www.facebook.com'},
        { iconType: 'twitter', link: 'www.instagram.com'},
        { iconType: 'instagram', link: 'www.twitter.com'},
    ]
    return (
        <ul className="lg:flex lg:gap-x-2">
            {socials.map(({iconType, link}, index) => (
                <li className="text-sm font-semibold leading-6 text-gray-900" key={index}>
                    <a href={link}>
                        <FontAwesomeIcon icon={['fab', iconType]}/>
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default Social;