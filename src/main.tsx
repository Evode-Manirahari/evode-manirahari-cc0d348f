import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log('Main.tsx is loading...');
const root = document.getElementById("root");
console.log('Root element:', root);

if (root) {
  console.log('Creating React root...');
  createRoot(root).render(<App />);
  console.log('React app should be rendering now');
} else {
  console.error('Root element not found!');
}
