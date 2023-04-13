import React from 'react';
import './styles.sass';

import { FiX } from 'react-icons/fi';

const Modal = ({isOpen, onClose, children}) => {
  if(isOpen) {
    return (
      <div className='modalContainer'>
        <div className='modal'>
          <div className='modalClose'>
            <button 
              className="close-button" 
              onClick={onClose}
            >
              <FiX 
                color='#000'
                size={32}
              />
            </button>
          </div>
          {children}
        </div>
      </div>
    )
  }
  return null
}

export default Modal;