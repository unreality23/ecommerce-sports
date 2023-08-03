import React from "react";
import FooterMenu from "../FooterMenu/FooterMenu";
import Logo from "../../atoms/Logo/Logo";
import IconMenu from "../../molecules/IconMenu/IconMenu";
import PaymentWays from "../../molecules/PaymentWays/PaymentWays";

//font awesome icons
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
library.add(faFacebook, faTwitter, faInstagram);

const Footer = () => {
  const socials = [
    {
      iconType: "facebook",
      link: "https://www.facebook.com",
      extraClass: "hover:text-facebook",
      iconPrefix: "fab",
    },
    {
      iconType: "twitter",
      link: "https://www.twitter.com",
      extraClass: "hover:text-twitter",
      iconPrefix: "fab",
    },
    {
      iconType: "instagram",
      link: "https://www.instagram.com",
      extraClass: "hover:text-instagram",
      iconPrefix: "fab",
    },
  ];

  return (
    <footer className="bg-timber-green py-5">
      <div className="top-footer m-6 mx-auto flex w-full max-w-7xl flex-col items-start justify-center desktop:px-8">
        <div className="content flex justify-start">
          <div className="content-left flex flex-col">
            <Logo
              image="/logo/vita-force-transparent.png"
              title="Sports - Staying Healthy"
              link="/"
              classNameImg="w-28"
            />
            <IconMenu
              classNameProp="mt-2 text-white gap-x-4"
              iconTypes={socials}
            />
          </div>
          <div className="content-right flex">
            <FooterMenu />
          </div>
        </div>
      </div>
      <div className="bottom-footer flex border-t border-t-0 pt-10 text-center">
        <div className="content mx-auto flex max-w-7xl flex-col">
          <PaymentWays />
          <div className="text-sm text-white">
            © 2023, Sports Outdoors, Build by Vaidotas Lipskas
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
