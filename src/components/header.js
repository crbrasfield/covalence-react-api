import React from 'react';
import { Link } from 'react-router-dom';

var header = () => (
  <div>
    <Link to='/films' className="btn btn-primary mt-5 mr-5">
      Show Films
      </Link>
    <Link to='/people' className="btn btn-primary mt-5">
      Show People
      </Link>
  </div>
);

export default header;