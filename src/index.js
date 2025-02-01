import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import App from './App';

// Use createRoot instead of ReactDOM.render
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);