import React, { useState } from 'react';

const Modal = () => {

  let [modal, setModal] = useState(false);

  return (
    {
      modal == true ? <Modal/> : null;
    }
  )
}

export default Modal;