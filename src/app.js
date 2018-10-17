import React from "react";

import MyRoutes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Router>
          <MyRoutes />
        </Router>
      </div>
    );
  }
}

export default App;
