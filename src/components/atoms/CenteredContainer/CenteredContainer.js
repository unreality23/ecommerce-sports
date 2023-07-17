import React from "react";

const CenteredContainer = ({children}) => {
    return (
        <div className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8 ">
            {children}
        </div>
    )
}

export default CenteredContainer;