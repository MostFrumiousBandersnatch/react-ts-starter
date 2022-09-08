import React from 'react';
import { createRoot } from 'react-dom/client';

import { helloWorld } from '@root/lib';

import './index.css';

const App = () => <h1 className="app">{helloWorld()}</h1>;

const mountPoint = document.getElementById('react-root');
const root = createRoot(mountPoint);

root.render(<App />);
