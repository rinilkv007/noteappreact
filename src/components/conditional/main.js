import React from 'react';
import logged from './logged';
import notlogged from './notlogged';

const main = ({isLoggedin}) => {
  return (
  <div>{isLoggedin ? <logged />:<notlogged />}</div>
  );
  
};

export default main;