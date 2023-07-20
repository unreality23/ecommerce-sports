import React, { useEffect, useState } from "react";
import Navigation from "../Navigation/Navigation";
const Header = ({ onHeaderHeightChange }) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = document.getElementById("header").clientHeight;
      onHeaderHeightChange(headerHeight);
      // Check if the scroll position is greater than header height
      const scrollPosition = window.scrollY;
      const sticky = scrollPosition >= headerHeight;

      //Update the sticky state based on the scroll position
      setIsSticky(sticky);
    };

    // monitor scroll position
    window.addEventListener("scroll", handleScroll);

    // Cleanup

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [onHeaderHeightChange]);

  return (
    <header
      id="header"
      className="sticky top-0 z-50 border-b border-black bg-white"
    >
      <Navigation />
    </header>
  );
};

export default Header;
