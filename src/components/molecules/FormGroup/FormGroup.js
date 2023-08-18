import React, { useRef } from "react";
import { CSSTransition } from "react-transition-group";

const FormGroup = ({ children }) => {
  // Create a ref for CSSTransition
  const cssTransitionRef = useRef(null);

  return (
    <CSSTransition
      nodeRef={cssTransitionRef}
      in={true}
      appear={true}
      timeout={500}
      classNames="fade"
    >
      <div
        className="form-group pt-3 transition-all duration-500 ease-in-out"
        ref={cssTransitionRef}
      >
        {children}
      </div>
    </CSSTransition>
  );
};

export default FormGroup;
