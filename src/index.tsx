import React from 'react';
import { render } from 'react-dom';

const App = () => <h1>Hello World!</h1>;

const mountPoint = document.getElementById('react-root');

render(<App />, mountPoint);
