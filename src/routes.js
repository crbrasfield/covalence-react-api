import React from 'react';

import Header from './components/header.js';
import FilmsList from './components/films';
import PeopleList from './components/people';

import { Route, Switch } from "react-router-dom";

var router = () => (
  <div>
    <Route component={Header} />
    <Route path='/films' component={FilmsList} />
    <Route path='/people' component={PeopleList} />
  </div>
)

export default router;