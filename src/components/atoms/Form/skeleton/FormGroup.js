import React, { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';



const FormGroup = ({ children }) => {

  // Create a ref for CSSTransition
  const csstransitionRef = useRef(null);

  return (
    <CSSTransition
      nodeRef={csstransitionRef}
      in={true}
      appear={true}
      timeout={500}
      classNames="fade"
    >
      <div className="form-group pt-3 transition-all duration-500 ease-in-out" ref={csstransitionRef}>
        {children}
      </div>
    </CSSTransition>
  );
};

export default FormGroup;
