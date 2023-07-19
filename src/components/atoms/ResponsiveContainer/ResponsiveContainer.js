import React, { useEffect, useState } from "react";

const ResponsiveContainer = ({ children }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const containerClassName = isSmallScreen ? "hidden" : "";
  return <div className={containerClassName}>{children}</div>;
};

export default ResponsiveContainer;
