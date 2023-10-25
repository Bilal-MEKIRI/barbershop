import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Template from './components/Template/Template';
import StickyNavBar from './components/StickyNavBar/StickyNavBar';

function App() {
  return (
    <Routes>
      <Route path="/" element={<StickyNavBar />}>
        <Route path="/" element={<Template />}>
          <Route index element={<Home />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
