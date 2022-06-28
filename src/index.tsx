import React from 'react';
import { render } from 'react-dom';
import { helloWorld } from '@root/lib';

const App = () => <h1>{helloWorld()}</h1>;

const mountPoint = document.getElementById('react-root');

render(<App />, mountPoint);
