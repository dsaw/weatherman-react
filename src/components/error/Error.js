import React, {useEffect, useState} from 'react';
import {Alert} from 'react-bootstrap';
import './Error.scss';

const Error = ({errorMessage}) => {
    const [show, setShow] = useState(true);

   return (show ? <Alert className="text-center" variant="danger" onClose={() => setShow(false)} dismissible>
          <p>{errorMessage || "Unfortunately, some error has occurred."}</p>
      </Alert> : null);
};

export default Error;
