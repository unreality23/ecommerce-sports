import React from 'react';
import { CSSTransition } from 'react-transition-group';


const FormGroup = ({ children }) => {
  return (
    <CSSTransition
      in={true}
      appear={true}
      timeout={500}
      classNames="fade"
    >
      <div className="form-group pt-3 transition-all duration-500 ease-in-out">
        {children}
      </div>
    </CSSTransition>
  );
};

export default FormGroup;
