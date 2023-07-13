import React from "react";
import FooterMenu from "../FooterMenu/FooterMenu";
import Logo from "../../atoms/Logo/Logo";
import Menu from "../../molecules/Menu/Menu";
import Social from "../../atoms/Social/Social";
import PaymentWays from "../../molecules/PaymentWays/PaymentWays";

const Footer = () => {
    return (
        <footer className="bg-green-500 py-5">
            <div className="top-footer mx-auto flex max-w-7xl items-start justify-center p-6 lg:px-8 w-full flex-col">
                <div className="content flex justify-start">
                    <Logo
                        image="/logo/sports-low-resolution-logo-white-on-black-background.png"
                        title="Sports - Staying Healthy"
                        link="/"
                        classNameImg="h-24"
                    />
                    <FooterMenu/>
                </div>

            </div>
            <div className="bottom-footer border-t-0 flex text-center border-t pt-10">
                <div className="content max-w-7xl mx-auto flex flex-col">
                    <PaymentWays/>
                    <div className="text-sm">
                        © 2023, Sports Outdoors, Build by Vaidotas Lipskas
                    </div>

                </div>

            </div>
        </footer>
    )
}

export default Footer;