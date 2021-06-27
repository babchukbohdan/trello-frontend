import { BrowserRouter } from 'react-router-dom';
import AppRouter from './domain/AppRouter/AppRouter';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
