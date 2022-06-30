import React from 'react';
import { createRoot } from 'react-dom/client';
import { helloWorld } from '@root/lib';

const App = () => <h1>{helloWorld()}</h1>;

const mountPoint = document.getElementById('react-root');
const root = createRoot(mountPoint);

root.render(<App />);
