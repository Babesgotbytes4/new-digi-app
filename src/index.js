import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { assessments } from './api/assessments';

assessments.sync();

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);


