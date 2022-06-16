import '../styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Greeting from './Greeting';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Greeting />} />
    </Routes>
  </BrowserRouter>
);

export default App;
