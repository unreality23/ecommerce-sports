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
        <div>
            {socials.map(({iconType, link}, index) => (
                <li key={index}>
                    <a href={link}>
                        <FontAwesomeIcon icon={['fab', iconType]}/>
                    </a>
                </li>
            ))}
        </div>
    )
}

export default Social;