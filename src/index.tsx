import React from 'react';
import { createRoot } from 'react-dom/client';

import { greet } from '@root/lib';

import './index.scss';

const App = () => <h1 className="app">{greet('World')}</h1>;

const mountPoint = document.getElementById('react-root');
const root = createRoot(mountPoint);

root.render(<App />);
