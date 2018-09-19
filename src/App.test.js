import React from 'react';
import ReactDOM from 'react-dom';
import Geniraptr from './Geniraptr';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Geniraptr />, div);
  ReactDOM.unmountComponentAtNode(div);
});
