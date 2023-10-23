import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Template from './components/Template/Template';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Template />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
